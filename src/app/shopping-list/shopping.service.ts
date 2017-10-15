import {EventEmitter, OnInit} from '@angular/core'
import { Ingredient } from '../shared/Ingredient.model';
import {forEach} from "@angular/router/src/utils/collection";

export class ShoppingService implements OnInit {
  newIngredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  ngOnInit(){
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.newIngredientAdded.emit(this.ingredients.slice());
  }

  adddIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.emit(this.ingredients.slice());
  }
}
