import { Injectable } from '@angular/core';
import {Recipe} from "../domain/Recipe";
import {FoodItem} from "../domain/FoodItem";
import {Nutrients} from "../domain/Nutrients";
import {FoodRestrictionCompatibility} from "../domain/EFoodRestrictionCompatibility";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }



  getRecipes(): Recipe[] {
    return this.mockRecipes
  }

  mockRecipes: Recipe[] = [

    Recipe.fullRecipe("ID", "Pork and Rice", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    ),


    Recipe.fullRecipe("ID", "Recipe Pork and Rice", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    ),


    Recipe.fullRecipe("ID", "Pork and Rice Name", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    ),


    Recipe.fullRecipe("ID", "RecipePork and Rice Name", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    ),


    Recipe.fullRecipe("ID", "Recipe NamePork and Rice", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    ),


    Recipe.fullRecipe("ID", "Pork and RiceRecipe Name", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    ),
    Recipe.fullRecipe(
      "-1",
      'Chicken and Rice',
      "A very tasty meal",
      [
        {
          id: '0',
          isPublic: false,
          name: 'Chicken',
          category: '',
          quantityGrams: 100,
          dateAdded: new Date(),
          nutrients: {
            protein: 20,
            carbohydrates: 20,
            fat: 20,
            saturatedFat: 20,
            fiber: 20,
            calories: 0,
          },
        },
        {
          id: '1',
          isPublic: false,
          name: 'Rice',
          quantityGrams: 200,
          category: '',
          dateAdded: new Date(),
          nutrients: {
            calories: 200,
            fat: 1,
            carbohydrates: 20,
            fiber: 5,
            protein: 2,
            saturatedFat: 1,
          },
        },
      ],
      4,
      ['Cook the chicken', 'Cook the rice', 'Mix them together'],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE],
      new Date(),
    ),
  ]

}
