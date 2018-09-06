import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as Strings from '../../environments/strings/strings';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * String variable loaded from Strings.ts containing strings so that translation in this app is possible.
   */
  private strings: any = Strings.strings;

  constructor(public navCtrl: NavController) {
    


  }

}
