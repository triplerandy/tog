import { Component, Input, OnInit } from '@angular/core';
import { Action } from '../../models/action.model';
import { ActionService } from '../../services/action.service';
import { NguCarouselConfig,NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'what',
  templateUrl: './what.html',
})
export class What implements OnInit {
  // @Input() information: any[];
  activitiesList: Array<any>;

  constructor(
    public actionService: ActionService,
  ) {
    this.activitiesList = JSON.parse(localStorage.getItem("tog-activities-list"));

  }

  carouselBanner

  setCurrentActivity(activity: any) {
    console.log(activity)
    this.actionService.setCurrentActivity("name", activity["name"])

    // localStorage.setItem("tog-current-activity", JSON.stringify(choice));
  }

  ngOnInit() {
     this.carouselBanner = {
       grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
       slide: 1,
       speed: 400,
       interval: {
         timing: 3000,
         initialDelay: 1000
       },
       point: {
         visible: true
       },
       load: 2,
       loop: true,
       touch: true
     };
   }

   /* It will be triggered on every slide*/
   onmoveFn(data: NguCarouselStore) {
     console.log(data);
   }
}
