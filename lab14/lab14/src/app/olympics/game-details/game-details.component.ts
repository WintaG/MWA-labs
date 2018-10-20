import { Component, OnInit } from '@angular/core';

import { DbService } from '../db.service';

import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({

  selector: 'app-game-details',

  template: `

    <p>

      game-details

    </p>

    Id: {{gameData._id}} <br>

    Name: {{gameData.game.name}} <br><br>

    <strong>Schedule: </strong>

      <div *ngFor="let item of gameData.game.schedule">

        Stadium: {{item.stadium}}<br>

        Date: {{item.date}}<br>

        Time: {{item.time}}<br>

        -------------

      </div>

    <hr>

  `,

  styles: []

})

export class GameDetailsComponent implements OnInit {



  private service: DbService;

  private gameData: object;

  private gameId: number;

  private paramSubscription: Subscription

  

  constructor(dbService: DbService, private route: ActivatedRoute) { 

    console.log("GameDetailsComponent constructor")

    this.service = dbService;

    this.paramSubscription = route.params.subscribe( params => {

      this.gameId = params['id'];

      this.gameData = this.service.getData().find(x => x['_id'] == this.gameId);

    })

  }



  ngOnInit() { 

    console.log("GameDetailsComponent ngOnInit")

  }



  ngOnDestroy() {

    console.log("GameDetailsComponent ngOnDestroy")

    this.paramSubscription.unsubscribe();

  }



}