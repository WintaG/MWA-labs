import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbService } from './db.service';
import { GamesComponent } from './games/games.component';
import { AppRoutingModule } from '../app-routing.module';
import { GameDetailsComponent } from './game-details/game-details.component';
import { ErrorGuard } from './guards/errorGuard';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [GamesComponent, GameDetailsComponent],
  providers: [DbService, ErrorGuard]
})
export class OlympicsModule { 

}