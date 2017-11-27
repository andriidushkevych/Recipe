import { OnInit} from '@angular/core'
import { Ingredient } from '../shared/Ingredient.model';
import {Subject} from "rxjs/Subject";

export class ShoppingService implements OnInit {
  newIngredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  ngOnInit(){
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.newIngredientAdded.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.newIngredientAdded.next(this.ingredients.slice());
  }

  adddIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.newIngredientAdded.next(this.ingredients.slice());
  }
}
