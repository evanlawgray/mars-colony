import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="color: red">{{ title }}</h1>
    <p> You've Changed the Title {{clickCount}} Times...</p>
    <p>New title: <input [(ngModel)]="input"></p>
    <button (click)="changeTitle()">Change that title</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  input = '';
  clickCount: any = 0;
  changeTitle(event) {
    if (this.title == this.input) { 
      this.title = 'You already tried that, comrade...Let\'s think of a new title';
    } else if (this.input == ''){
      return;
    }else if (this.clickCount > 5) {
      this.clickCount = 'too many';
    } else {
      this.title = this.input;
      this.clickCount++;
    }   
  }
}
