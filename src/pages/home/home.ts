import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Strings from '../../environments/strings/strings';

@IonicPage({
  segment: 'home/:mode'
})
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * String variable loaded from Strings.ts containing strings so that translation in this app is possible.
   */
  private strings: any = Strings.strings;

  /**
   * Mode to control where this headed?
   */
  private mode: string = "send";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.mode = this.navParams.data["mode"];
    console.log(this.navParams)
    // console.log(this.navParams.data["mode"])
    //
    // if (!this.navParams.data["mode"]) {
    //   this.navCtrl.setRoot("HomePage", { "mode": "send" })
    // }

  }



  goHome() {
    this.navCtrl.setRoot("HomePage", { "mode": "send" });
  }

}
