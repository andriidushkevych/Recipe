import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../recipe/recipe.model";

@Injectable()
export class DataStorageService {
  private serverAddress = 'https://ng-recipe-book-63466.firebaseio.com/recipes.json';
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(this.serverAddress, this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get(this.serverAddress)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
      }
    );
  }
}

