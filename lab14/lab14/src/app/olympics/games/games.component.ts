import { Component, OnInit } from '@angular/core';

import { DbService } from '../db.service';



@Component({

  selector: 'app-games',

  template: `

  <ul>

    <li *ngFor="let item of dataList">

      <a [routerLink]="['game', item._id]">{{item.game.name}}</a>

    </li>

  </ul>

  <router-outlet></router-outlet>

  `,

  styles: []

})

export class GamesComponent implements OnInit {

  

  private service: DbService;

  dataList: object[];

  

  constructor(dbService: DbService) { 

    console.log("GamesComponent constructor")

    this.service = dbService;

  }



  ngOnInit() {

    console.log("GamesComponent ngOnInit")

    this.dataList = this.service.getData();

  }



}