import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { What } from './what';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    What,
  ],
  imports: [
    IonicPageModule.forChild(What),
    DragScrollModule,
    NguCarouselModule
  ],
  exports: [
    What
  ]
})
export class WhatModule { }
