import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NewEncounter, Alien, Colonist } from '../models';

import { REPORT_URL } from '../models/API';
import { AliensAPIService } from '../apiService/aliens';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService]
})
export class ReportComponent implements OnInit {
  newEncounter: NewEncounter;
  colonist: Colonist;
  aliens: Alien[];
  date: any;
  reportForm: FormGroup;
  clicked: boolean;


  constructor(private aliensApiService: AliensAPIService) {
    
    this.getAliens();

    this.date = new Date;
    this.clicked = false;

    this.reportForm = new FormGroup ({
      atype: new FormControl('none', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(200)])
    })

  }

   logEncounter(){
     this.clicked = true;
     console.log(this.reportForm);
     console.log(this.date);
   }

  ngOnInit() {
  }

  getAliens() {
    this.aliensApiService.fetchAliens()
                       .subscribe((result) => {
                        console.log('Colonist was saved:', result);
                        this.aliens = result;
                       });    
  }

}
