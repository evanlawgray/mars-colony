import {  Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


import { Job } from '../models';

export class JobsAPIService {
    fetchJobs (): Observable<Job[]> {

    }
}
