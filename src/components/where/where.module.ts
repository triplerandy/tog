import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Where } from './where';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    Where,
  ],
  imports: [
    IonicPageModule.forChild(Where),
    AgmCoreModule.forRoot(
    //   {
    //   apiKey: 'AIzaSyDJJFPhwGoLi5aiAJ4aX1fEQ7-hJWFjCa0 '
  // }
  )
  ],
  exports: [
    Where
  ]
})
export class WhereModule { }
