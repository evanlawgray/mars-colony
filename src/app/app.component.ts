import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/register">register page</a>
    <a routerLink="/encounters">encounters page</a>
    <a routerLink="/report">report encounters page</a>
    <a routerLink="/notfound">404 not found page</a>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  
}
