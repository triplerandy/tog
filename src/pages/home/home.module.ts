import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SendModule } from '../../components/send/send.module';
import { CreateModule } from '../../components/create/create.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SendModule,
    CreateModule
  ],
  providers: [
  ]
})
export class HomeModule { }
