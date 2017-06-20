import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template:`
  <h1>
  {{2 + 2}}
</h1>
<app-input></app-input>
<ul>
  <li *ngFor="let item of todoList">
    {{ item.title }}
  </li>
</ul>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'app works';
  private todoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
}
