import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { 
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

import {
  COLONIST_URL,
  JOBS_URL
} from '../models/API';

import { ColonistAPIService } from '../apiService/colonists';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService]
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  marsJobs: Job[];
  clicked: boolean;
  colonistAPIService: ColonistAPIService;

  public fakeColonist;

  constructor(private colonistApiService: ColonistAPIService) { 
    //TODO: call API, get jobs.

    this.clicked = false;

    this.getMarsJobs();



    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('',[Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('none', [Validators.required])
  });
   
}

  acceptAge(min: number, max: number) {
    return (control: AbstractControl):{ [key: string]: any } => {
      if (control.value < min || control.value > max) {
        return { 'Sorry, wrong age group': { age: control.value } };
      }
    }
  }

  ngOnInit() { 

  }

  postNewColonist(event) {
    event.preventDefault();
    // this.clicked = true;
    if(! this.registerForm.invalid) {
      //The form is invalid

    } else {
      console.log('hello');
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist (name, age, job_id);
      console.log(newColonist);
      this.colonistApiService.saveColonist(newColonist)
                             .subscribe((result) => {
                               console.log('Colonist was saved:', result);
                             });
    }
  }

  getMarsJobs() {
    console.log('Getting jobs...');

  }

}
