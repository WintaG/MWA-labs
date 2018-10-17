import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
             <app-counter [counter]="componentCounterValue" (counterChange)="counterChange($event)"></app-counter>
  <br>
  Component Counter Value: {{componentCounterValue}}
            </div>
              `,
  styles: ['div {border:1px solid green; width: 350px; height:70px; text-align: center;}']
})
export class AppComponent {
  
  private componentCounterValue: number = 5;

  counterChange(e: number) {
    this.componentCounterValue = e;
  }
}
