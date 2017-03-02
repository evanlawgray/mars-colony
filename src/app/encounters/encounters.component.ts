import { Component, OnInit } from '@angular/core';
import {Encounter} from '../models';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
})
export class EncountersComponent implements OnInit {
  encounters: Encounter[]

  constructor() { 
    this.encounters = [
        {
        "id": 3,
        "date": "2016-11-18",
        "colonist_id": 8,
        "atype": "The Predator",
        "action": "Rubbed mud on self to hide from heat sensors."
      },
      {
        "id": 4,
        "date": "2016-11-18",
        "colonist_id": 10,
        "atype": "Special K",
        "action": "Hunted the alien known as \"Special K\".\nHe offered donuts for his life. Took donuts, killed anyway."
      },
      {
        "id": 5,
        "date": "2016-11-18",
        "colonist_id": 18,
        "atype": "Octospider",
        "action": "Removed the legs, made some soup."
      },
      {
        "id": 6,
        "date": "2016-11-18",
        "colonist_id": 13,
        "atype": "Special K",
        "action": "Saw Ermil eating all of the Doughnuts.  Told him to eat a carrot! He did.\n"
      },
      {
        "id": 7,
        "date": "2016-11-18",
        "colonist_id": 16,
        "atype": "Octospider",
        "action": "asf"
      },
    ];
  }

  ngOnInit() {
  }

}
