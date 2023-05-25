import { Recipe } from './Recipe';

export class MealPlan {
  id: string;
  date: Date;
  recipe: Recipe;

  constructor(id: string, date: Date, recipe: Recipe) {
    this.id = id;
    this.date = date;
    this.recipe = recipe;
  }

  static empty(): MealPlan {
    return new MealPlan('', new Date(), Recipe.emptyRecipe());
  }
}
