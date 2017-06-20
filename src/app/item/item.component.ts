import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <p>
      item Works!
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
