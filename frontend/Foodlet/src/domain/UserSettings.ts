import {FoodRestrictionCompatibility} from "./EFoodRestrictionCompatibility";
import {Nutrients} from "./Nutrients";
import {FoodItem} from "./FoodItem";
import {Recipe} from "./Recipe";
import {MealPlan} from "./MealPlan";


export interface UserData {
  id: string
  recipes: Recipe[]
  mealPlans: MealPlan[]
  firstName: string
  lastName: string
  gender: string
  age: number
}


