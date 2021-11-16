import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsUpdated = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('A', 5),
        new Ingredient('B', 2),
    ];

    getIngredience(){
        return this.ingredients.slice();
    }

    addItem(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // Use a standard for-loop

        this.ingredients.push(...ingredients);
        this.ingredientsUpdated.emit(this.ingredients.slice());
    }
}