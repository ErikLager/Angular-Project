import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe',
            'this is just a random test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('goreio', 1),
                new Ingredient('noihåry', 6),
                new Ingredient('fhenwu9', 2),
                new Ingredient('jeiocn', 8),
            ]),
        new Recipe('A another test recipe',
            'this is just a random test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('ngnrnbr', 1),
                new Ingredient('greni', 6),
                new Ingredient('grhbeui', 2),
                new Ingredient('Meaning of life', 42),
            ]),
    ];

    constructor(private shoppingService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.shoppingService.addIngredients(ingredient);
    }
}

