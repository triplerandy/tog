import { Component, Input } from '@angular/core';

@Component({
  selector: 'where',
  templateUrl: './where.html',
})
export class Where {
  // @Input() information: any[];
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
  }

  // private toggleSection(i): void {
  //   this.information[i].open = !this.information[i].open;
  // }
}
