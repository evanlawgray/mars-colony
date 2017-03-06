import {  Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Job, Colonist, NewColonist } from '../models';


export const ALIENS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
export const COLONIST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
export const REPORT_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
export const JOBS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
export const ENCOUNTERS_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
export const JOURNAL_URL = 'http://fourth.academy.red/wp-json/wp/v2/';
