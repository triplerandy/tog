import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { When } from './when';

@NgModule({
  declarations: [
    When,
  ],
  imports: [
    IonicPageModule.forChild(When),
  ],
  exports: [
    When
  ]
})
export class WhenModule { }
