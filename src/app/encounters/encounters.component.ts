import { Component, OnInit } from '@angular/core';
import {Encounter} from '../models';

import { ENCOUNTERS_URL } from '../models/API';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers:  [EncountersAPIService]
})
export class EncountersComponent implements OnInit {
  encounters: Encounter[];
  encountersAPIService: EncountersAPIService;

  constructor(private encountersApiService: EncountersAPIService) { 
    this.fetchEncounters();
  }

  ngOnInit() {
  }

  fetchEncounters() {
    this.encountersApiService.fetchEncounters()
                       .subscribe((result) => {
                        console.log('hello');
                        console.log('Colonist was saved:', result);
                        this.encounters = result;
                       });    
  }

}
