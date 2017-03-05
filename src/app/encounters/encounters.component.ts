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
  loadingEncounters: boolean;

  constructor(private encountersApiService: EncountersAPIService) {
    this.loadingEncounters = true; 
    this.fetchEncounters();
  }

  ngOnInit() {
  }

  fetchEncounters() {
    this.encountersApiService.fetchEncounters()
                       .subscribe((result) => {
                        this.loadingEncounters = false;
                        this.encounters = result;
                       });    
  }

}
