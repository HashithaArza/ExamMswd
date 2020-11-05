import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootballComponent } from './football/football.component';
import { CricketBatComponent } from './cricket-bat/cricket-bat.component';
import { BatmentonRacketComponent } from './batmenton-racket/batmenton-racket.component';
import { CricketHelmetComponent } from './cricket-helmet/cricket-helmet.component';
import { HockeyStickComponent } from './hockey-stick/hockey-stick.component';
import {MaterialModule} from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    CricketBatComponent,
    BatmentonRacketComponent,
    CricketHelmetComponent,
    HockeyStickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
