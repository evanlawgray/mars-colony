import { Component, OnInit } from '@angular/core';
import { Colonist, NewColonist, Job } from '../models';
import { Router } from '@angular/router';
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
import { JobsAPIService } from '../apiService/jobs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  marsJobs: Job[];
  clicked: boolean;
  colonistAPIService: ColonistAPIService;
  jobsAPIService: JobsAPIService;
  loadingJobs: boolean;
  jobsRequestFailed: boolean;
  invalidAge: boolean;

  public fakeColonist;

  constructor(private colonistApiService: ColonistAPIService,
              private jobsApiService: JobsAPIService,
              private router: Router) { 
 

    this.clicked = false;
    this.loadingJobs = true;
    this.invalidAge = false;
    this.getMarsJobs();



    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('',[Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('none', [Validators.required, Validators.pattern(/^\d+$/)])
  });
   
}

  acceptAge(min: number, max: number) {
    return (control: AbstractControl):{ [key: string]: any } => {
      if (control.value < min || control.value > max) {
        this.invalidAge = true;
        return { 'Sorry, wrong age group': { age: control.value } };
      } else { this.invalidAge = false; }
    }
  }

  ngOnInit() { 

  }

  postNewColonist(event) {
    event.preventDefault();
    
    if(this.registerForm.invalid) {
      this.clicked = true;
      console.log('fuck');
      return;

    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist (name, age, job_id);
      this.colonistApiService.saveColonist({ colonist: newColonist})
                             .subscribe((result) => {
                             this.clicked = true;
                             localStorage.setItem("colonist", JSON.stringify(result));
                             this.router.navigate(['encounters']);
                             });        
    }  
  }

  getMarsJobs() {
    this.jobsApiService.fetchJobs()
                       .subscribe((result) => {
                        this.loadingJobs = false;
                        this.marsJobs = result;
                       });    
  }

}
