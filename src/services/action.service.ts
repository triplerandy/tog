import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';

@Injectable()
export class ActionService {
  initActivitiesList() {
    var activities = [
      { "name": "eat", "imagePath": "../assets/imgs/activities/hd/eat.jpg" },
      { "name": "drink", "imagePath": "../assets/imgs/activities/hd/drink.jpg" },
      { "name": "sport", "imagePath": "../assets/imgs/activities/hd/sport.jpg" },
      { "name": "party", "imagePath": "../assets/imgs/activities/hd/party.jpg" },
    ];
    localStorage.setItem("tog-activities-list", JSON.stringify(activities));
  }

  initInitialActivity() {
    var curActivity = localStorage.getItem("tog-current-activity");

    var action = new Action();
    action.name = "do anything";
    action.location_query = "within the 10km";
    action.time_query = "in the next half an hour";
    action.people_query = "with anyone";

    console.log("here?")
    console.log(curActivity);

    !curActivity && localStorage.setItem("tog-current-activity", JSON.stringify(action));
  }

  setCurrentActivity(paramName: string, paramValue: string) {
    var curActivity = JSON.parse(localStorage.getItem("tog-current-activity"))

    var action = new Action();
    action.name = curActivity["name"];
    action.location_query = curActivity["location_query"];
    action.time_query = curActivity["time_query"];
    action.people_query = curActivity["people_query"];

    console.log(action)
    action[paramName] = paramValue;
    console.log(action)

    localStorage.setItem("tog-current-activity", JSON.stringify(action));
  }
}
