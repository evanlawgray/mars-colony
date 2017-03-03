import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NewEncounter, Alien, Colonist } from '../models';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  newEncounter: NewEncounter;
  colonist: Colonist;
  aliens: Alien[];
  date: any;
  reportForm: FormGroup;
  clicked: boolean;


  constructor() {
    this.aliens = [
      {
        "type": "Special K",
        "submitted_by": "1",
        "id": 1,
        "description": "Special."
      },
      {
        "type": "Endomorph",
        "submitted_by": "1",
        "id": 2,
        "description": "Slimy, and gross."
      },
      {
        "type": "Octospider",
        "submitted_by": "1",
        "id": 3,
        "description": "Rendevous with Rama."
      },
      {
        "type": "The Predator",
        "submitted_by": "1",
        "id": 4,
        "description": "Yeah, he's here. Call Arnold."
      },
      {
        "type": "Darth Vader",
        "submitted_by": "3",
        "id": 5,
        "description": "Got daddy issues."
      },
      {
        "type": "Yoda",
        "submitted_by": "3",
        "id": 6,
        "description": "Do or do not do; there is not try."
      }
    ];

    this.date = new Date;
    this.clicked = false;

    this.reportForm = new FormGroup ({
      atype: new FormControl('none', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(200)])
      // date: new Date.format('YYYY-MM-DD')
  })

   }

   logEncounter(){
     this.clicked = true;
     console.log(this.reportForm);
     console.log(this.date);
   }

  ngOnInit() {
  }

}
