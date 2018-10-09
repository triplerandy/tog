import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Who } from './who';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    Who,
  ],
  imports: [
    IonicPageModule.forChild(Who),
    DragScrollModule,
  ],
  exports: [
    Who
  ]
})
export class WhoModule { }
