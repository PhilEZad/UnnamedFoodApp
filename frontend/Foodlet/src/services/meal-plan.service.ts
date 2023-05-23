import { Injectable } from '@angular/core';
import {MealPlan} from "../domain/MealPlan";
import {Recipe} from "../domain/Recipe";
import {FoodItem} from "../domain/FoodItem";
import {Nutrients} from "../domain/Nutrients";
import {FoodRestrictionCompatibility} from "../domain/EFoodRestrictionCompatibility";

@Injectable({
  providedIn: 'root'
})
export class MealPlanService {

  constructor() { }

  getMealPlans(): MealPlan[] {
    return this.mockMealPlan
  }



  mockMealPlan: MealPlan[] = [
    {
      id: "ID",
      date: new Date(2023, 4, 22),
      recipe: Recipe.fullRecipe("ID", "Pork and Rice", "A very distinct and unique description of a delicious recipe",
        [
          new FoodItem("Pork Sirloin", 400, "Meat",
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
          new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
        ], 4,
        ["Step 1", "Step 2", "Step 3", "Step 4"],
        [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
        new Date()
      )
    },
    {
      id: "ID",
      date: new Date(2023, 4, 23),
      recipe: Recipe.fullRecipe("ID", "Recipe Pork and Rice", "A very distinct and unique description of a delicious recipe",
        [
          new FoodItem("Pork Sirloin", 400, "Meat",
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
          new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
        ], 4,
        ["Step 1", "Step 2", "Step 3", "Step 4"],
        [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
        new Date()
      )
    },
    {
      id: "ID",
      date: new Date(2023, 4, 24),
      recipe: Recipe.fullRecipe("ID", "Pork and Rice Name", "A very distinct and unique description of a delicious recipe",
        [
          new FoodItem("Pork Sirloin", 400, "Meat",
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
          new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
        ], 4,
        ["Step 1", "Step 2", "Step 3", "Step 4"],
        [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
        new Date()
      )
    },
    {
      id: "ID",
      date: new Date(2023, 4, 25),
      recipe: Recipe.fullRecipe("ID", "RecipePork and Rice Name", "A very distinct and unique description of a delicious recipe",
        [
          new FoodItem("Pork Sirloin", 400, "Meat",
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
          new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
        ], 4,
        ["Step 1", "Step 2", "Step 3", "Step 4"],
        [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
        new Date()
      )
    },
    {
      id: "ID",
      date: new Date(2023, 4, 26),
      recipe: Recipe.fullRecipe("ID", "Recipe NamePork and Rice", "A very distinct and unique description of a delicious recipe",
        [
          new FoodItem("Pork Sirloin", 400, "Meat",
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
          new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
        ], 4,
        ["Step 1", "Step 2", "Step 3", "Step 4"],
        [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
        new Date()
      )
    },
    {
      id: "ID",
      date: new Date(2023, 4, 27),
      recipe: Recipe.fullRecipe("ID", "Pork and RiceRecipe Name", "A very distinct and unique description of a delicious recipe",
        [
          new FoodItem("Pork Sirloin", 400, "Meat",
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
          new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
        ], 4,
        ["Step 1", "Step 2", "Step 3", "Step 4"],
        [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
        new Date()
      )
    },
  ];
}
