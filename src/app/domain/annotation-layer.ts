import { Filter, Geometry, LineString, Polygon, SVGConverter } from "ng-niney";

export class AnnotationLayer {
  private imowValueModel = null;
  private palette = [
    "fbb469",
    "faa346",
    "f99223",
    "f38005",
    "d16e05",
    "ae5c04",
    "8b4903",
    "683702"
  ];

  annotation = null;
  visible = false;
  filter = null;
  confineFill = false;
  mapStyle = null;
  legendStyle = null;
  cssFunction = null;
  labelCssFunction = null;

  normwaarden = [];
  normwaardeColors = {};
  normwaardeObjects = [];

  constructor(imowValueModel, annotation) {
    this.imowValueModel = imowValueModel;
    this.annotation = annotation;
    this.init();
  }

  setVisible(visible) {
    this.visible = visible;
  }

  private init() {
    const annotation = this.annotation;
    if (annotation.locatieType != null) {
      const locatie = annotation;
      this.setUniform(
        this.getFilter(locatie),
        !locatie.locatieType.indexOf("Lijn"),
        Object.assign({}, this.imowValueModel.symboolcodes["vag500"], {"border-color": "#f40", "border-width": "2px", stroke: "#f40", "stroke-width": "3px"})
      );
    } else if (annotation.gebiedsaanwijzingType != null) {
      const locaties = annotation.locaties;
      this.setUniform(
        this.getFilter(locaties.concat(locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []))),
        !locaties[0].locatieType.indexOf("Lijn"),
        this.imowValueModel.getSymboolcode(annotation.gebiedsaanwijzingType, annotation.groep)
      );
    } else if (annotation.betreftEenActiviteit != null) {
      const locaties = annotation.locaties;
      this.setUniform(
        this.getFilter(locaties.concat(locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []))),
        !locaties[0].locatieType.indexOf("Lijn"),
        this.imowValueModel.getSymboolcode("Activiteit", annotation.betreftEenActiviteit.groep)
      );
    } else {  // normwaarde
      const omgevingsnorm = annotation;
      const kwan = (omgevingsnorm.normwaarde[0].kwantitatieveWaarde != null);
      
      this.normwaarden = omgevingsnorm.normwaarde.concat().sort(kwan?
        ((a, b) => (a.kwantitatieveWaarde < b.kwantitatieveWaarde)? 1: (a.kwantitatieveWaarde > b.kwantitatieveWaarde)? -1: 0):
        ((a, b) => (a.kwalitatieveWaarde > b.kwalitatieveWaarde)? 1: (a.kwalitatieveWaarde < b.kwalitatieveWaarde)? -1: 0)
      );
      this.normwaardeColors = {};

      this.normwaarden.forEach((normwaarde, i) => this.normwaardeColors[normwaarde.identificatie] = kwan?
        this.getColor(normwaarde.kwantitatieveWaarde, this.normwaarden[0].kwantitatieveWaarde, this.normwaarden[this.normwaarden.length - 1].kwantitatieveWaarde):
        this.getColor(i, this.normwaarden.length - 1, 0)
      );

      const locaties = [];
      const symbolizations = {};
      this.normwaarden.forEach(normwaarde => {
        const color = this.normwaardeColors[normwaarde.identificatie];
        normwaarde.locaties.concat(normwaarde.locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), [])).forEach(locatie => {
          locaties.push(locatie);
          symbolizations[locatie.technischId || locatie.identificatie] = {color: color, text: (normwaarde.kwalitatieveWaarde || normwaarde.kwantitatieveWaarde) + ""};
        });
      });
      this.setGradient(
        this.getFilter(locaties),
        !locaties[0].locatieType.indexOf("Lijn"),
        symbolizations
      );

      this.setNormwaardeObjects(3);
    }
  }

  setNormwaardeObjects(numClasses) {
    const classifiedNormwaarden = this.getClassifiedNormwaarden(this.normwaarden, numClasses);
    this.normwaardeObjects = classifiedNormwaarden.map(classifiedNormwaarde => {
      return {
        normwaarde: classifiedNormwaarde,
        colors: classifiedNormwaarde.normwaarden?
          classifiedNormwaarde.normwaarden.map(normwaarde => this.normwaardeColors[normwaarde.identificatie]):
          [this.normwaardeColors[classifiedNormwaarde.identificatie]]
      };
    });
  }

  getClassifiedNormwaarden(normwaarden, numClasses) {
    if (numClasses == 0) {
      return [];
    }

    if (normwaarden[0].kwantitatieveWaarde == null) {  // kwalitatieveWaarde
      if ((numClasses == 1) && (normwaarden.length == 1)) {
        return normwaarden;
      }
      if (numClasses == 1) {
        return [];
      }
      return normwaarden.concat().sort((a, b) => (a.kwalitatieveWaarde > b.kwalitatieveWaarde)? 1: (a.kwalitatieveWaarde < b.kwalitatieveWaarde)? -1: 0);
    }

    normwaarden = normwaarden.concat().sort((a, b) => (a.kwantitatieveWaarde < b.kwantitatieveWaarde)? 1: (a.kwantitatieveWaarde > b.kwantitatieveWaarde)? -1: 0);
    if (normwaarden.length <= numClasses) {
      return normwaarden;
    }

    const classifiedNormwaarden = normwaarden.map((normwaarde, i) => {
      return {
        i: i,
        max: normwaarde.kwantitatieveWaarde,
        min: normwaarde.kwantitatieveWaarde,
        mean: normwaarde.kwantitatieveWaarde,
        locaties: normwaarde.locaties,
        normwaarden: [normwaarde]
      }
    });

    while (classifiedNormwaarden.length > numClasses) {
      let nearest = {i: 0, distance: Number.MAX_SAFE_INTEGER};
      classifiedNormwaarden.forEach((classifiedNormwaarde, i) => {
        if ((i > 0) && (classifiedNormwaarden[i - 1].mean - classifiedNormwaarde.mean) < nearest.distance) {
          nearest = {i: i, distance: (classifiedNormwaarden[i - 1].mean - classifiedNormwaarde.mean)};
        }
      });
      const narrowest = classifiedNormwaarden.splice(nearest.i, 1)[0];
      const other = classifiedNormwaarden[nearest.i - 1];
      other.min = narrowest.min;
      other.mean = other.min + 0.5 * (other.max - other.min);
      other.locaties = other.locaties.concat(narrowest.locaties);
      other.normwaarden = other.normwaarden.concat(narrowest.normwaarden);
    }

    const viewUnit = normwaarden[0].omgevingsnorm.viewUnit;
    classifiedNormwaarden.forEach(classifiedNormwaarde => {
      classifiedNormwaarde.kwantitatieveWaarde = true;
      classifiedNormwaarde.omgevingsnorm = normwaarden[0].omgevingsnorm;
      classifiedNormwaarde.viewValue = classifiedNormwaarde.min + ((classifiedNormwaarde.min == classifiedNormwaarde.max)? "": (" - " + classifiedNormwaarde.max)) + (viewUnit? " ": "") + viewUnit;
    });

    return classifiedNormwaarden;
  }

  private setUniform(filter, confineFill, symboolcode) {
    this.filter = filter;
    this.confineFill = confineFill;
    this.mapStyle = Object.assign({}, symboolcode, {background: "none", border: "none"});
    this.legendStyle = symboolcode;
  }

  private setGradient(filter, confineFill, symbolizations) {
    const cssFunction = (css, featureObject) => {
      const symbolization = symbolizations[featureObject.feature.properties.identificatie];
      if (symbolization != null) {
        css.fill = symbolization.color;
      } else {
        css.fill = "none";
      }
    };
    const labelCssFunction = (css, featureObject, scaling) => {
      const symbolization = symbolizations[featureObject.feature.properties.identificatie];
      if (symbolization != null) {
        const geometry0 = featureObject.feature.geometry;
        const geometry1 = (geometry0 instanceof Geometry)? geometry0: (new SVGConverter()).pathToGeometry(geometry0);
        const measurement = (geometry1 instanceof Polygon)? geometry1.getEnvelope(): (geometry1 instanceof LineString)? geometry1.getLength(): Number.MAX_SAFE_INTEGER;
        if (
          ((measurement.maxX - measurement.minX) * (measurement.maxY - measurement.minY) < 12500 / scaling) ||
          (measurement < 50 / scaling)
        ) {
          return;
        }
        css.labelText = symbolization.text;
        css.labelPoint = geometry1.getLabelPoint(5);
      } else {
        css.labelText = null;
        css.labelPoint = null;
      }
    };
    this.filter = filter;
    this.confineFill = confineFill;
    this.cssFunction = cssFunction;
    this.labelCssFunction = labelCssFunction;
  }

  private getColor(value, top, base) {
    let rgb;
    if (base == top) {
      rgb = this.hexToRgb(this.palette[Math.floor(this.palette.length / 2)]);
    } else {
      const index = (value - base) / (top - base) * (this.palette.length - 1);
      const floor = Math.floor(index);
      const ceil = Math.ceil(index);
      if (floor == ceil) {
        rgb = this.hexToRgb(this.palette[floor]);
      } else {
        const floorRgb = this.hexToRgb(this.palette[floor]);
        const ceilRgb = this.hexToRgb(this.palette[ceil]);
        const floorFactor = ceil - index;
        const ceilFactor = index - floor;
        rgb = [0, 1, 2].map(i => floorRgb[i] * floorFactor + ceilRgb[i] * ceilFactor);
      }
    }
    return "rgb(" + rgb.join(", ") + ")";
  }

  private hexToRgb(hex) {
    const match = hex.match(/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
    return [
      parseInt(match[1], 16),
      parseInt(match[2], 16),
      parseInt(match[3], 16)
    ];
  }

  private getFilter(filter) {
    return new Filter(
      "properties.identificatie",
      (Array.isArray(filter)? filter: [filter].concat(filter.omvat || [])).map(locatie => locatie.technischId || locatie.identificatie),
      "IN"
    );
  }
}
