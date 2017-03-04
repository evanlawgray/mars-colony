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

  public fakeColonist;

  constructor(private colonistApiService: ColonistAPIService, private jobsApiService: JobsAPIService, private router: Router) { 
 

    this.clicked = false;

    this.getMarsJobs();



    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('',[Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('none', [Validators.required, Validators.pattern(/\[0-9]/g)])
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
    
    if(this.registerForm.invalid) {
      this.clicked = true;
      return;

    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist (name, age, job_id);
      console.log(newColonist);
      this.colonistApiService.saveColonist({ colonist: newColonist})
                             .subscribe((result) => {
                             localStorage.setItem("colonist_id", JSON.stringify(result.id));
                             this.router.navigate(['encounters']);
                             });        
    }
    
  }

  getMarsJobs() {
    this.jobsApiService.fetchJobs()
                       .subscribe((result) => {
                        console.log('Colonist was saved:', result);
                        this.marsJobs = result;
                       });    
 }

}
