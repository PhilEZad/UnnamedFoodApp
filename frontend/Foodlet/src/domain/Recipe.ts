import {Nutrient} from "./Nutrient";

export class Recipe {

  id: string = ""
  title: string = ""
  description: string = ""
  ingredients: FoodItem[] = [] // for calculation
  servings: number = 0
  instructions: string[] = []


  constructor(title: string, servings: number, instructions: string[], ingredients: FoodItem[]) {
    this.title = title
    this.servings = servings
    this.instructions = instructions
    this.ingredients = ingredients
  }

  static emptyRecipe(): Recipe {
    return new Recipe("", 0, [], [])
  }

  static fromJSON(json: any): Recipe {
    let recipe = this.emptyRecipe()
    recipe.title = json.title
    recipe.servings = json.servings

    recipe.instructions = json.instructions.split(".")

    return recipe
  }

}


export interface FoodItem {
  name: string
  quantityGrams: number
  calories: number
  nutrients: Nutrient[]
}


enum FoodRestrictionCompatibility {
  NO_RESTRICTION,
  VEGAN,
  VEGETARIAN,
  DIABETIC,
  GLUTEN_FREE,
  KETO,
  PALEO,
  PESCATARIAN,
  DAIRY_FREE,
  LOW_FAT,
  LOW_SODIUM,
  LOW_SUGAR,
  LOW_CARB,
  LOW_CHOLESTEROL,
  LOW_CALORIE,
  LOW_PROTEIN,
  LOW_FIBER,
  LOW_POTASSIUM,
  LOW_SATURATED_FAT,

}
