export interface Job {
    name: string;
    id: number;
    description: string;
}

export class NewColonist {
    name: string;
    age: string;
    job_id: string;
}

export class NewEncounter {
    atype: string;
    date: string;
    action: string;
    colonist_id: string;
}

export interface Colonist {
    name: string;
    job: Job;
    id: number;
    age: number;
}

export interface Encounter {
    id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;
}

export interface Alien {
    type: string;
    submitted_by: string;
    id: number;
    description: string;
}