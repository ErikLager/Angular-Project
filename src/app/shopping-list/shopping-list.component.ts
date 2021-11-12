import { Component, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('A', 5),
    new Ingredient('B', 2),
  ];

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public addingIngredient(name: string, amount: number){
    new Ingredient[name, amount];
  }
}
