import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DifeventosComponent } from '../difeventos/difeventos.component';
import { Difeventos2Component } from '../difeventos2/difeventos2.component';
import { Difeventos3Component } from '../difeventos3/difeventos3.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DifeventosComponent, Difeventos2Component,Difeventos3Component]
})
export class HomePageModule {}
