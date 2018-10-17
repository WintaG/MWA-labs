import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div class="fo">
             <button (click)="decrease()">-</button>
               {{counterValue}}
             <button (click)="increase()">+</button>
            </div>

  `
  ,
  styles: [`.fo { border:1px solid orange; width: 150px; height:50px; text-align: center;}`]
})
export class counterComponent implements OnInit {
   @Input('counter') counterValue: number;

  @Output() counterChange: EventEmitter<number>

  constructor() {
    this.counterChange = new EventEmitter();
    this.counterValue = 0;
  }

  ngOnInit() {
  }

  decrease() {
    this.counterValue -= 1
    this.counterChange.emit(this.counterValue)
  }

  increase() {
    this.counterValue += 1
    this.counterChange.emit(this.counterValue)
  }

}
