import { Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { Timer } from "ng-niney";

@Component({
  selector: "dso-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.scss"]
})
export class TextInputComponent {
  private timer = new Timer(500, 1);

  @Input() label;
  @Input() placeholder;
  @Input() dsoModel = "";
  @Output() dsoModelChange = new EventEmitter<string>();
  @Output() dsoInput = new EventEmitter();

  constructor(private hostRef: ElementRef) {
    this.timer.timerHandler = () => this.emit();
  }

  keyHandler(event) {
    if (event.key == "ArrowDown") {
      const sibling = this.hostRef.nativeElement.nextElementSibling;
      if ((sibling != null) && sibling.classList.contains("list-group")) {
        sibling.firstElementChild.focus();
      }
    }
  }

  write() {
    this.timer.reset();
    this.timer.start();
  }

  erase() {
    this.timer.stop();

    this.dsoModel = "";

    this.emit();
  }

  private emit() {
    this.dsoModelChange.emit(this.dsoModel);
    this.dsoInput.emit();
  }
}
