import {  Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Alien } from '../models';
import { ALIENS_URL } from '../models/API';

@Injectable()
export class AliensAPIService {

    constructor(private http: Http) {}

    fetchAliens(): Observable<Alien[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(ALIENS_URL, { headers })
                        .map((res:Response) => res.json().aliens);
    }
}