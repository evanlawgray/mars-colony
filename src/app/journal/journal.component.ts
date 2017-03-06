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

                          for (const post of result) {
                            this.parsePosts(post);
                          }

                          this.posts = result;
                        });    
  }

  parsePosts(post: any) {
    let dirtyPost = post.content.rendered.toString();
    let cleanPost = dirtyPost.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '');    // Remove all <p> tags"  

    let cleanPostObject = {content: {rendered: cleanPost}}; 
    this.posts.push(cleanPostObject);
    // parsedPosts.push(cleanPost);
    console.log(this.posts);
  }

  ngOnInit() {
  }

}
