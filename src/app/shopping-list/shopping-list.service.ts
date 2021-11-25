import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsUpdated = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('A', 5),
        new Ingredient('B', 2),
    ];

    getIngredience(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addItem(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }
}