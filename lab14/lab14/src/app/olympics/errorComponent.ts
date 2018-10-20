import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
  <hr>
  <div style="text-align: center;">Error Friendly Page!!!!</div>
  <hr>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit() {
  }

}