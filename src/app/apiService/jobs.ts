import {  Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Job } from '../models';
import { JOBS_URL } from '../models/API';

@Injectable()
export class JobsAPIService {

    constructor(private http: Http) {}

    fetchJobs(): Observable<Job[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(JOBS_URL, { headers })
            .map((res:Response) => res.json());
    }
}