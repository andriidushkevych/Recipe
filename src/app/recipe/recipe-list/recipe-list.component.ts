import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Sandwich", "description", "http://www.subway.com/ns/images/menu/CAN/ENG/RPLC-sandwich-Tuna-594x334.jpg"),
    new Recipe("Another Sandwich", "Another description", "http://www.subway.com/ns/images/menu/CAN/ENG/RPLC-sandwich-Tuna-594x334.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
