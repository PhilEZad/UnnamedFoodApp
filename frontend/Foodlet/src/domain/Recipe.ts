import {FoodItem} from "./FoodItem";
import {FoodRestrictionCompatibility} from "./EFoodRestrictionCompatibility";

export class Recipe {

  id: string = ""
  title: string = ""
  description: string = ""
  ingredients: FoodItem[] = []
  servings: number = 0
  instructions: string[] = []
  dietCompatibility: FoodRestrictionCompatibility[] = []


  constructor(title: string, servings: number, instructions: string[], ingredients: FoodItem[]) {
    this.title = title
    this.servings = servings
    this.instructions = instructions
    this.ingredients = ingredients
  }

  static emptyRecipe(): Recipe {
    return new Recipe("", 0, [], [])
  }



}
