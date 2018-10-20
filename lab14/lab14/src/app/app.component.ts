import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['olympics']">Olympics</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'exercise1';
}