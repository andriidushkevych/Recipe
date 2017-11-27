import { Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import {ShoppingService} from "../shopping-list/shopping.service";


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Double cheeseburger",
      "Perfect burger with double meat and cheese",
      "https://lh3.googleusercontent.com/rZffPhtsT38VMvV40KZNzgzGpiR8LVeqcRYDVHKYoWoz6vuKj_0X2nTcpUrqfbnVKSpsPOiR6eyos1el_2UB=s400",
      [
        new Ingredient("Bread", 1),
        new Ingredient("Meat", 2),
        new Ingredient("Cheese", 2),
      ]),
    new Recipe(
      "Salad",
      "Fresh green salad",
      "http://img.taste.com.au/wsDnET-r/taste/2016/11/thai-noodle-salad-87691-1.jpeg",
      [
        new Ingredient("Salad leaf", 2),
        new Ingredient("Cucumber", 1),
        new Ingredient("Tomatoes", 2),
      ]),
  ];

  constructor(private shoppingService: ShoppingService) {

  }
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.adddIngredients(ingredients);
  }

  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
