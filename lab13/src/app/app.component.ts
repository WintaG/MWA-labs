import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-newComp [items]="arrayItems"></app-newComp>
  `,
  styles: []
})
export class AppComponent {
  title = 'exercise1';

  private arrayItems: Array<object>;

  constructor() {
    this.arrayItems = [{ name: 'Edwin', color: '#b00404' }, 
    { name: 'Alejandro', color: '#00aaff' }, 
    { name: 'Cobos', color: '#04b04a' }, 
    { name: 'Fonseca', color: '#a704b0' }];
  }

}