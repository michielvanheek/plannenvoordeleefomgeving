import { Envelope, Filter } from "ng-niney";

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
  type = null;
  filter = null;
  cssFunction = null;
  labelCssFunction = null;
  mapStyle = null;
  legendStyle = null;
  visible = false;

  normwaardeObjects = [];

  constructor(imowValueModel, annotation, type) {
    this.imowValueModel = imowValueModel;
    this.annotation = annotation;
    this.type = type;

    this.setVisible(true);
  }

  setVisible(visible) {
    if (!visible) {
      this.visible = false;
      return;  
    }

    const annotation = this.annotation;
    const type = this.type;
    if (type == "L") {
      const locatie = annotation;
      this.setUniformCssFunction(
        this.getFilter(locatie),
        Object.assign({}, this.imowValueModel.symboolcodes["vag500"], {"border-color": "#f40", "border-width": "2px", stroke: "#f40", "stroke-width": "3px"})
      );
    } else if (type == "G") {
      const locaties = annotation.locaties;
      this.setUniformCssFunction(
        this.getFilter(locaties.concat(locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []))),
        this.imowValueModel.getSymboolcode(annotation.subType, annotation.groep)
      );
    } else if (type == "A") {
      const locaties = annotation.locaties;
      this.setUniformCssFunction(
        this.getFilter(locaties.concat(locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []))),
        this.imowValueModel.getSymboolcode("Activiteit", annotation.betreftEenActiviteit.groep)
      );
    } else {  // type == "N"
      const omgevingsnorm = annotation;
      const normwaarden = omgevingsnorm.normwaarde;

      const locaties = [];
      const symbolizations = {};
      normwaarden.forEach(normwaarde => {
        const color = this.getColor(normwaarde, omgevingsnorm);
        normwaarde.locaties.concat(normwaarde.locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), [])).forEach(locatie => {
          locaties.push(locatie);
          symbolizations[locatie.identificatie] = {color: color, text: (normwaarde.kwalitatieveWaarde || normwaarde.kwantitatieveWaarde) + ""};
        });
      });
      this.setGradientCssFunction(this.getFilter(locaties), symbolizations);

      this.normwaardeObjects = normwaarden.map(normwaarde => {
        return {normwaarde: normwaarde, color: this.getColor(normwaarde, omgevingsnorm)};
      });
    }
  }

  private setUniformCssFunction(filter, symboolcode) {
    setTimeout(() => {
      this.filter = filter;
      this.mapStyle = Object.assign({}, symboolcode, {background: "none", border: "none"});
      this.legendStyle = symboolcode;
      this.visible = true;
    });
  }

  private setGradientCssFunction(filter, symbolizations) {
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
        const envelope = new Envelope(...featureObject.feature.bbox());
        if ((envelope.maxX - envelope.minX) * (envelope.maxY - envelope.minY) < 12500 / scaling) {
          return;
        }
        css.labelText = symbolization.text;
        css.labelPoint = envelope.getCenterPoint();
      } else {
        css.labelText = null;
        css.labelPoint = null;
      }
    };
    setTimeout(() => {
      this.filter = filter;
      this.cssFunction = cssFunction;
      this.labelCssFunction = labelCssFunction;
      this.visible = true;
    });
  }

  private getColor(normwaarde, omgevingsnorm) {
    let rgb;
    const base = omgevingsnorm.normwaarde[0].kwantitatieveWaarde;
    const top = omgevingsnorm.normwaarde[omgevingsnorm.normwaarde.length - 1].kwantitatieveWaarde;
    if (base == top) {
      rgb = this.hexToRgb(this.palette[Math.floor(this.palette.length / 2)]);
    } else {
      const index = (normwaarde.kwantitatieveWaarde - base) / (top - base) * (this.palette.length - 1);
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
      (Array.isArray(filter)? filter: [filter].concat(filter.omvat || [])).map(locatie => locatie.identificatie),
      "IN"
    );
  }
}
