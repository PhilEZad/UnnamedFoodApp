import {FoodRestrictionCompatibility} from "./EFoodRestrictionCompatibility";
import {Nutrients} from "./Nutrients";
import {FoodItem} from "./FoodItem";
import {Recipe} from "./Recipe";
import {MealPlan} from "./MealPlan";


export interface UserData {
  id: string
  userSettings: UserSettings
  foodItems: FoodItem[]
  recipes: Recipe[]
  mealPlans: MealPlan[]
}

export interface UserSettings {
  firstName: string
  lastName: string
  gender: string
  age: number
  heightCm: number
  weightKg: number
  activityLevel: ActivityLevel
  dietRestrictions: FoodRestrictionCompatibility[]
  maxCaloriesPerRecipe: number
}

enum ActivityLevel {
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  EXTREMELY_ACTIVE
}
