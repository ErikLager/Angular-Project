import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];
    // private recipes: Recipe[] = [
    //     new Recipe('A test recipe',
    //         'this is just a random test',
    //         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    //         [
    //             new Ingredient('goreio', 1),
    //             new Ingredient('noihåry', 6),
    //             new Ingredient('fhenwu9', 2),
    //             new Ingredient('jeiocn', 8),
    //         ]),
    //     new Recipe('A another test recipe',
    //         'this is just a random test',
    //         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    //         [
    //             new Ingredient('ngnrnbr', 1),
    //             new Ingredient('greni', 6),
    //             new Ingredient('grhbeui', 2),
    //             new Ingredient('Meaning of life', 42),
    //         ]),
    // ];

    constructor(private shoppingService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.shoppingService.addIngredients(ingredient);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

