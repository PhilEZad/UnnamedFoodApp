import { Component } from '@angular/core';
import {FoodItem, Recipe} from "../../../domain/Recipe";

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.scss']
})
export class RecipeCreatorComponent {



  recipe: Recipe = Recipe.emptyRecipe();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.recipe.ingredients.push(
      {
        name: "",
        amount: 0,
        protein: 0,
        fat: 0,
        saturatedFat: 0,
        fiber: 0,
        category: '',
        carbohydrates: 0,
        calories: 0,
        quantityGrams: 0,
      } as FoodItem);
  }

  addStep() {
    this.recipe.instructions.push("");
  }
}
