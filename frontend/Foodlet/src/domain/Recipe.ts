export class Recipe {

  id: string = ""
  title: string = ""
  description: string = ""
  ingredients: FoodItem[] = []
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


}


export interface FoodItem {
  name: string
  quantityGrams: number
  calories: number
  protein: number
  fat: number
  saturatedFat: number
  fiber: number
  carbohydrates: number
  category: string
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
