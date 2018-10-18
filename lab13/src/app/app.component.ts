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
    this.arrayItems = [{ name: 'Winta', color: '#00aaff'}, 
    { name: 'Livan', color: '#b00404' }, 
    { name: 'Merhawi', color:'#a704b0'  }, 
    { name: 'Yahia', color: '#04b04a'  }];
  }

}
