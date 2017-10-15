import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  providers: [RecipeService]
})

export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
