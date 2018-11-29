import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {
  @Input() inputPlaceholder: string;
  @Input() buttonLabel: string;

  @Output() inputText = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitText(text: string) {
    this.inputText.emit(text);
  }
}
