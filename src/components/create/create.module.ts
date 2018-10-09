import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Create } from './create';
import { WhatModule } from '../what/what.module'
import { WhenModule } from '../when/when.module'
import { WhoModule } from '../who/who.module'
import { WhereModule } from '../where/where.module'

@NgModule({
  declarations: [
    Create,
  ],
  imports: [
    IonicPageModule.forChild(Create),
    WhatModule,
    WhenModule,
    WhoModule,
    WhereModule,
  ],
  exports: [
    Create
  ]
})
export class CreateModule { }
