import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  template: `
    <p>
      shopping-list works!
    </p>
  `,
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
