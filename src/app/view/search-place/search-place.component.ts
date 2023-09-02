import { Component, DoCheck, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CenterScale, FocusModel, Point, WKTConverter } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { MeasureModelService } from "src/app/model/measure-model.service";
import { StateModelService } from "src/app/model/state-model.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "dso-search-place",
  templateUrl: "./search-place.component.html",
  styleUrls: ["./search-place.component.scss"]
})
export class SearchPlaceComponent implements DoCheck {
  private markerXY = null;

  s = "";
  locaties = [];
  locatie = null;

  @Input() init;

  constructor(
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    public stateModel: StateModelService,
    public markerModel: MarkerModelService,
    public measureModel: MeasureModelService
  ) { }

  ngDoCheck() {
    if (this.markerXY != this.markerModel.xy) {
      this.markerXY = this.markerModel.xy;
      if (this.markerModel.xy != null) {
        this.locatie = null;
      }
    }
  }

  suggest() {
    if (this.s.length < 2) {
      this.locaties = [];
      return;
    }

    const url = environment.geocoderUrl + "suggest?q=" + this.s;
    this.http.get(url).subscribe(response => {
      if (response["response"] == null) {
        this.locaties = [];
      } else {
        this.locaties = response["response"].docs;
      }
    });
  }

  lookup(locatieId, locatieWeergavenaam) {
    this.s = locatieWeergavenaam;
    this.locaties = [];

    const url = environment.geocoderUrl + "lookup?fl=id,weergavenaam,geometrie_rd&id=" + locatieId;
    this.http.get(url).subscribe(response => {
      const locatie = response["response"].docs[0];
      locatie.geometry = (new WKTConverter()).wktToGeometry(locatie.geometrie_rd);

      this.zoomToLocatie(locatie);

      if (locatie.geometry instanceof Point) {
        this.markerModel.setXY(locatie.geometry, locatie.weergavenaam);
      } else {
        this.locatie = locatie;
        this.markerModel.clear();
      }
    });
  }

  zoomToLocatie(locatie) {
    const envelope = locatie.geometry.getEnvelope();
    const centerX = envelope.minX + envelope.getWidth() / 2;
    const centerY = envelope.minY + envelope.getHeight() / 2;
    const scale = Math.max(
      envelope.getWidth() / this.nineyDefault.defaultBoundsModel.bounds.width,
      envelope.getHeight() / this.nineyDefault.defaultBoundsModel.bounds.height
    ) / this.nineyDefault.defaultFocusModel.centerScale.coordPixFactor;
    this.nineyDefault.defaultFocusModel.setCenterScale(new CenterScale(centerX, centerY, scale), FocusModel.IF_REQUIRED_UPPER);
  }
}
