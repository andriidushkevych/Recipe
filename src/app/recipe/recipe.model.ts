export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(nameArg: string, desc: string, imagePath: string) {
    this.name = nameArg;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
