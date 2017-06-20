import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `                           
    <input [value]="title"              
           (keyup.enter)="changeTitle($event.target.value)"
           #inputElement>
    <button (click)="changeTitle(inputElement.value)">
      Save
    </button>
    <p>The title is: {{ title }}</p>
  `,  
  styleUrls: ['./input.component.css']  
})    
export class InputComponent implements OnInit {
  private title: string = '';           

  constructor() { }                     

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;              
  }
}