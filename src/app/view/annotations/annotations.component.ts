import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";

@Component({
  selector: "dso-annotations",
  templateUrl: "./annotations.component.html",
  styleUrls: ["./annotations.component.scss"]
})
export class AnnotationsComponent implements OnInit, OnChanges, OnDestroy {
  private palette = [
    "fcc68c",
    "fbb469",
    "faa346",
    "f99223",
    "f38005",
    "d16e05",
    "ae5c04",
    "8b4903",
    "683702",
    "452401"
  ];

  annotation = null;
  normwaardenGrid = [];

  @Input() component;
  @Input() display;

  constructor(
    public highlightModel: HighlightModelService,
    public imowModel: ImowModelService
  ) { }

  get header() {
    return this.component.identificatie.match(/art.*$/)[0].replace(/art_/, "Artikel ").replace(/__para_/, ", lid ");
  }

  get regeltekst() {
    return this.component.regeltekst;
  }

  ngOnInit() {
    this.imowModel.loadRegeltekstForComponent(this.component);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.component) {
      this.imowModel.loadRegeltekstForComponent(this.component);
    }
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.setAnnotation(null, null);
      this.display.emit("annotationsVisible", false);
    });
  }

  isGebiedsaanwijzingDisabled(gebiedsaanwijzing) {
    return !gebiedsaanwijzing.locaties || !gebiedsaanwijzing.locaties.length;
  }

  isOmgevingsnormDisabled(omgevingsnorm) {
    return omgevingsnorm.normwaarde.some(normwaarde => !normwaarde.locaties || !normwaarde.locaties.length);
  }

  setAnnotation(annotation, type) {
    this.annotation = annotation;

    if (annotation == null) {
      this.imowModel.cssFunction = null;
      return;  
    }

    if (type == "L") {
      const locatie = annotation;
      this.setUniformCssFunction(
        [locatie].concat(locatie.omvat || []),
        "#8b4903"
      );
    } else if (type == "A") {
      const locaties = annotation.locaties;
      this.setUniformCssFunction(
        locaties.concat(locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), [])),
        "#faa346"
      );
    } else {  // type == "N"
      const omgevingsnorm = annotation;
      const normwaarden = omgevingsnorm.normwaarde;

      const locatieColors = {};
      normwaarden.forEach(normwaarde => {
        const locaties = normwaarde.locaties;
        const color = this.getColor(normwaarde, omgevingsnorm);
        locaties.concat(locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), [])).forEach(locatie => {
          locatieColors[locatie.identificatie] = color;
        });
      });
      this.setGradientCssFunction(locatieColors);

      this.normwaardenGrid = [];
      const numColumns = Math.ceil(normwaarden.length / 4);
      const numRows = Math.ceil(normwaarden.length / numColumns);
      for (let i = 0; i < numColumns; i++) {
        this.normwaardenGrid.push(
          normwaarden.slice(i * numRows, (i + 1) * numRows).map(normwaarde => {
            return {normwaarde: normwaarde, color: this.getColor(normwaarde, omgevingsnorm)};
          })
        );
      }
    }
  }

  private setUniformCssFunction(locaties, color) {
    const locatieIdentificaties = locaties.map(locatie => locatie.identificatie);
    this.imowModel.cssFunction = (css, featureObject) => {
      if (locatieIdentificaties.includes(featureObject.feature.properties.identificatie)) {
        css.fill = color;
      } else {
        css.fill = "none";
      }
    };
  }

  private setGradientCssFunction(locatieColors) {
    setTimeout(() => {
    this.imowModel.cssFunction = (css, featureObject) => {
      css.fill = locatieColors[featureObject.feature.properties.identificatie] || "none";
    };
  });
  }

  private getColor(normwaarde, omgevingsnorm) {
    const base = omgevingsnorm.normwaarde[0].kwantitatieveWaarde;
    const top = omgevingsnorm.normwaarde[omgevingsnorm.normwaarde.length - 1].kwantitatieveWaarde;
    const index = (normwaarde.kwantitatieveWaarde - base) / (top - base) * (this.palette.length - 1);
    const floor = Math.floor(index);
    const ceil = Math.ceil(index);
    let rgb;
    if (floor == ceil) {
      rgb = this.hexToRgb(this.palette[floor]);
    } else {
      const floorRgb = this.hexToRgb(this.palette[floor]);
      const ceilRgb = this.hexToRgb(this.palette[ceil]);
      const floorFactor = ceil - index;
      const ceilFactor = index - floor;
      rgb = [0, 0, 0].map((a, i) => floorRgb[i] * floorFactor + ceilRgb[i] * ceilFactor);
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
}
