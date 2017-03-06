import { Component, OnInit } from '@angular/core';
import {Post} from '../models';

import { JOURNAL_URL } from '../models/API';
import { JournalAPIService } from '../apiService/post';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  providers: [JournalAPIService]
})
export class JournalComponent implements OnInit {
  posts: Post[];
  journalAPIService: JournalAPIService;
  loadingPosts: boolean;

  constructor(private journalApiService: JournalAPIService) { 
    this.loadingPosts = true;
    this.posts = new Array();
    this.fetchPosts();
  }

  fetchPosts() {
    this.journalApiService.fetchPosts()
                          .subscribe((result) => {
                          this.loadingPosts = false;
                          this.posts = result;
                        });    
  }
  
  ngOnInit() {
  }

}
