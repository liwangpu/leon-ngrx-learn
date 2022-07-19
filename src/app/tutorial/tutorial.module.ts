import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DataCenterModule } from '../data-center';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    DataCenterModule
  ]
})
export class TutorialModule { }
