import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService{

    url:string = 'https://ng-cource-recipe-book-96a43-default-rtdb.firebaseio.com/recipes.json';

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.url, recipes).subscribe(response =>{
            console.log(response);
        });

    }

    fetchRecipes(){
        return this.http.get<Recipe[]>(this.url)
        .pipe(map(recipes =>{
            return recipes.map(recipe=>{
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }), tap(recipes=>{
            this.recipeService.setRecipes(recipes);
        })
        )
    }
}