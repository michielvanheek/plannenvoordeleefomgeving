import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "dso-plan-accordion",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./plan-accordion.component.html",
  styleUrls: ["./plan-accordion.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PlanAccordionComponent {
  private titleLevels = {
    BOEK: 1,
    DEEL: 1,
    HOOFDSTUK: 1,
    TITEL: 2,
    AFDELING: 2,
    PARAGRAAF: 3,
    SUBPARAGRAAF: 4,
    SUBSUBPARAGRAAF: 5
  };
  private preselectedComponent = null;

  @Input() item;
  @Input() level;
  @Input() toc;
  @Input() display;
  @Input() componentIdentificaties;

  isVisible(element) {
    return (
      (!this.toc || (this.titleLevels[element.type] || 6) <= this.display.tocLevel) &&
      (this.display.allVisible ||
        ((this.componentIdentificaties.specific == null) && (this.componentIdentificaties.filtered == null)) ||
        ((this.componentIdentificaties.filtered == null) && (this.componentIdentificaties.specific[element.identificatie] != null)) ||
        ((this.componentIdentificaties.filtered != null) && (this.componentIdentificaties.filtered[element.identificatie] != null))
      )
    );
  }

  hasChildren(element) {
    return element._embedded.documentComponenten.length > 0;
  }

  hasNoOpschrift(element) {
    return (element.type == "LID") || ((element.type == "DIVISIETEKST") && !element.opschrift) || (element.type == "BEGRIP");
  }

  isNotSpecific(element) {
    return (this.componentIdentificaties.specific != null) && (this.componentIdentificaties.specific[element.identificatie] == null);
  }

  isFiltered(element) {
    return (this.componentIdentificaties.filtered != null) && (this.componentIdentificaties.filtered[element.identificatie] != null);
  }

  isPreOrSelected(element) {
    return (this.componentIdentificaties.selected == element.identificatie) || (this.preselectedComponent == element);
  }

  isSelected(element) {
    return this.componentIdentificaties.selected == element.identificatie;
  }

  isOpenable(element): boolean {
    return this.toc || (!element.gereserveerd && !element.vervallen && !this.display.allOpen);
  }

  preselect(element) {
    this.preselectedComponent = element;
  }

  select(element) {
    if (!this.hasChildren(element)) {
      this.componentIdentificaties.emit("selected", element.identificatie);
    }
  }

  open(element) {
    if (this.toc) {
      this.preselectedComponent = null;
      this.componentIdentificaties.emit("selected", element.identificatie);
      this.display.setTab(element.identificatie);
    } else if (!element.gereserveerd && !element.vervallen && !this.display.allOpen) {
      element.isOpen = !element.isOpen;
    }
  }

  setAnnotationsVisible() {
    setTimeout(() => this.display.emit("annotationsVisible", true));
  }
}

