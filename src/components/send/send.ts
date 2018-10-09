import { Component, Input } from '@angular/core';
import * as Strings from '../../environments/strings/strings';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Action } from '../../models/action.model';

@Component({
  selector: 'send',
  templateUrl: './send.html',
})
export class Send {
  // @Input() information: any[];
  /**
   * String variable loaded from Strings.ts containing strings so that translation in this app is possible.
   */
  private strings: any = Strings.strings;

  private action: Action;

  constructor(
    public navCtrl: NavController,
  ) {
    this.action = new Action();
    var tempAction = JSON.parse(localStorage.getItem("tog-current-activity"));
    this.action.name = tempAction["name"];
    this.action.location_query = tempAction["location_query"];
    this.action.time_query = tempAction["time_query"];
    this.action.people_query = tempAction["people_query"];

  }

  editClick() {
    console.log("navigating to create page")
    this.navCtrl.setRoot("HomePage", { "mode": "create" })
  }

  // private toggleSection(i): void {
  //   this.information[i].open = !this.information[i].open;
  // }
}
