import {  Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Colonist, NewColonist } from '../models';
import { COLONIST_URL } from '../models/API';

@Injectable()
export class ColonistAPIService {

    constructor(private http: Http) {}

    saveColonist(newColonist: NewColonist): Observable<Colonist> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(COLONIST_URL, newColonist, { headers })
            .map((res: Response) => res.json().encounter);
    }
}