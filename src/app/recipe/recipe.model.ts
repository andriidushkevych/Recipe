import { Ingredient } from "../shared/Ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(nameArg: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = nameArg;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
