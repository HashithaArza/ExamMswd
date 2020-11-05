import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
 import {MatButtonModule} from '@angular/material/button';
 import {MatIconModule} from '@angular/material/icon';
 import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [MatToolbarModule,MatListModule,MatButtonModule,MatIconModule,MatCardModule]
@NgModule({
  imports: [
  MaterialComponents
  ],
  exports:[
  MaterialComponents
  ]
  }) 
export class MaterialModule { }
