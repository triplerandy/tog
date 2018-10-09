import { Component, Input } from '@angular/core';
import * as Strings from '../../environments/strings/strings';

@Component({
  selector: 'create',
  templateUrl: './create.html',
})
export class Create {
  // @Input() information: any[];
  mode: string = "what";

  /**
   * String variable loaded from Strings.ts containing strings so that translation in this app is possible.
   */
  private strings: any = Strings.strings;

  private action: any = {
    "name": "do anything",
    "location_query": "within the 10km",
    "time_query": "in the next half an hour",
    "people_query": "with anyone.",
  }

  constructor() {
  }

  // private toggleSection(i): void {
  //   this.information[i].open = !this.information[i].open;
  // }
}
