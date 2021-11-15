import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes:Recipe[] = [
        new Recipe('A test recipe', 'this is just a random test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A test recipe', 'this is just a random test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
      ];    

      getRecipes(){
          return this.recipes.slice();
      }
}

