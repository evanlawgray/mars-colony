import {  Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Encounter, NewEncounter } from '../models';
import { ENCOUNTERS_URL } from '../models/API';

interface EncounterPostRequest {
    encounter: NewEncounter;
}

@Injectable()
export class EncountersAPIService {

    constructor(private http: Http) {}

    fetchEncounters(): Observable<Encounter[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(ENCOUNTERS_URL, { headers })
                        .map((res:Response) => res.json().encounters);
    }

    saveNewEncounter(newEncounter: EncounterPostRequest): Observable<Encounter> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(ENCOUNTERS_URL, newEncounter, { headers })
                        .map((res: Response) => res.json());

    }
}