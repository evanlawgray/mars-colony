import {  Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Post } from '../models';
import { JOURNAL_URL } from '../models/API';


@Injectable()
export class JournalAPIService {

    constructor(private http: Http) {}

    fetchPosts(): Observable<Post[]> {
        return this.http.get(JOURNAL_URL + 'posts')
                        .map((res:Response) => res.json());
    }
}
