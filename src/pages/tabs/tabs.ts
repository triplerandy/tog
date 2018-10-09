import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as Strings from '../../environments/strings/strings';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "HomePage";
  tab2Root = "AboutPage";

  chatParams = {
    mode: 'create'
  };

  /**
   * String variable loaded from Strings.ts containing strings so that translation in this app is possible.
   */
  private strings: any = Strings.strings;

  constructor() {

  }
}
