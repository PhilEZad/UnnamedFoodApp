import { Recipe } from './Recipe';

export class MealPlan {
  id: string = null!;
  date: Date = null!;
  recipe: Recipe = null!;

  constructor(id: string, date: Date, recipe: Recipe) {
    this.id = id;
    this.date = date;
    this.recipe = recipe;
  }
  static empty(): MealPlan {
    return new MealPlan('', new Date(Date.now()), Recipe.emptyRecipe());
  }
}
