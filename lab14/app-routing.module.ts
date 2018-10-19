import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './olympics/games/games.component';
import { GameDetailsComponent } from './olympics/game-details/game-details.component';
import { ErrorGuard } from './olympics/guards/errorGuard';
import { ErrorComponent } from './olympics/errorComponent';

const routes: Routes = [
  {
    path: 'olympics', component: GamesComponent, children: [
      { path: 'game/:id', component: GameDetailsComponent, canActivate: [ErrorGuard] }
    ]
  },
  { path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }