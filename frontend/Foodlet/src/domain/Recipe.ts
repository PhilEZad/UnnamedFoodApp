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
  dateAdded: Date = new Date()


  constructor(title: string, servings: number, instructions: string[], ingredients: FoodItem[]) {
    this.title = title
    this.servings = servings
    this.instructions = instructions
    this.ingredients = ingredients
  }

  static fullRecipe(id: string, title: string, description:string,
                    ingredients: FoodItem[], servings: number, instructions: string[],
                    dietCompatability: FoodRestrictionCompatibility[], dateAdded: Date): Recipe {
    let recipe = new Recipe(title, servings, instructions, ingredients)
    recipe.id = id
    recipe.description = description
    recipe.dietCompatibility = dietCompatability
    recipe.dateAdded = dateAdded
    return recipe
  }

  static emptyRecipe(): Recipe {
    return new Recipe("", 0, [], [])
  }



}
