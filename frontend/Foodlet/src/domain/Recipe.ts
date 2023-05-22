import { FoodItem } from './FoodItem';
import { FoodRestrictionCompatibility } from './EFoodRestrictionCompatibility';

export class Recipe {
  id: string = '';
  title: string = '';
  description: string = '';
  ingredients: FoodItem[] = [];
  servings: number = 0;
  instructions: string[] = [];
  dietCompatibility: FoodRestrictionCompatibility[] = [];
  isPublic: boolean = false;

  dateAdded: Date = new Date();
  constructor(
    title: string,
    description: string,
    ingredients: FoodItem[],
    servings: number,
    instructions: string[],
    dietCompatibility: FoodRestrictionCompatibility[],
    isPublic: boolean
  ) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.servings = servings;
    this.instructions = instructions;
    this.dietCompatibility = dietCompatibility;
    this.isPublic = isPublic;
  }

  static fullRecipe(
    id: string,
    title: string,
    description: string,
    ingredients: FoodItem[],
    servings: number,
    instructions: string[],
    dietCompatability: FoodRestrictionCompatibility[],
    dateAdded: Date
  ): Recipe {
    let recipe = new Recipe(
      title,
      description,
      ingredients,
      servings,
      instructions,
      dietCompatability,
      false
    );
    recipe.id = id;
    recipe.dateAdded = dateAdded;
    return recipe;
  }

  static emptyRecipe(): Recipe {
    return new Recipe('', '', [], 0, [], [], false);
  }
}
