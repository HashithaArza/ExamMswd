import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatmentonRacketComponent } from './batmenton-racket/batmenton-racket.component';
import { CricketBatComponent } from './cricket-bat/cricket-bat.component';
import { CricketHelmetComponent } from './cricket-helmet/cricket-helmet.component';
import { FootballComponent } from './football/football.component';
import { HockeyStickComponent } from './hockey-stick/hockey-stick.component';

const routes: Routes = [
  {path:'batmenton-racket',component:BatmentonRacketComponent},
  {path:'cricket-bat',component:CricketBatComponent},
  {path:'cricket-helmet',component:CricketHelmetComponent},
  {path:'football',component:FootballComponent},
  {path:'hockey-stick',component:HockeyStickComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
