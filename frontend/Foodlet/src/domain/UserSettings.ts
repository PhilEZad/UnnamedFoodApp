import {FoodRestrictionCompatibility} from "./EFoodRestrictionCompatibility";
import {Nutrients} from "./Nutrients";

export interface UserSettings {
  age: number
  heightCm: number
  weightKg: number
  activityLevel: ActivityLevel
  gender: string //TODO?: enum
  dietRestrictions: FoodRestrictionCompatibility[]
  goalNutrients: Nutrients
  dailyConsumption: Nutrients
}


enum ActivityLevel {
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  EXTREMELY_ACTIVE
}
