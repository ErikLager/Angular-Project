import { Component, OnInit } from '@angular/core';
import { addingIngredient } from '../shopping-list.component'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  addIngredient(name: string, amount: number){
    event.preventDefault();
    console.log(name);
    console.log(amount);

    addingIngredient(name, amount);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
