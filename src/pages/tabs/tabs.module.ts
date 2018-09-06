import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  providers: [
  ]
})
export class TabModule { }
