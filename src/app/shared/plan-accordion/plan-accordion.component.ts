import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "dso-plan-accordion",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./plan-accordion.component.html",
  styleUrls: ["./plan-accordion.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PlanAccordionComponent {
  @Input() item;
  @Input() level;
  @Input() allVisible = false;
  @Input() componentIdentificaties;

  isVisible(element) {
    return this.allVisible ||
      ((this.componentIdentificaties.specific == null) && (this.componentIdentificaties.filtered == null)) ||
      ((this.componentIdentificaties.filtered == null) && (this.componentIdentificaties.specific[element.identificatie] != null)) ||
      ((this.componentIdentificaties.filtered != null) && (this.componentIdentificaties.filtered[element.identificatie] != null))
  }

  hasNoOpschrift(element) {
    return ((element.type == 'LID') || (element.type == 'DIVISIETEKST')) && !element.opschrift;
  }

  isNotSpecific(element) {
    return (this.componentIdentificaties.specific != null) && (this.componentIdentificaties.specific[element.identificatie] == null);
  }

  isFiltered(element) {
    return this.allVisible && (this.componentIdentificaties.filtered != null) && (this.componentIdentificaties.filtered[element.identificatie] == "target");
  }

  isSelected(element) {
    return this.allVisible && (this.componentIdentificaties.selected == element.identificatie);
  }

  openElement(element) {
    if (!element.gereserveerd && !element.vervallen && !this.allVisible) {
      element.isOpen = !element.isOpen;
    }
  }
}

