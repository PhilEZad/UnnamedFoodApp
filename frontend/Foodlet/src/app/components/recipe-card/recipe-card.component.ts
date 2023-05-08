import { Component } from '@angular/core';
import {Recipe} from "../../../domain/Recipe";


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  recipe: Recipe = new Recipe(
    "Chicken and Rice",
    4,
    ["Cook the chicken", "Cook the rice", "Mix them together"],
    [
      {name: "Chicken", calories: 100, quantityGrams:100, fat: 11, carbohydrates: 1, category: "poultry", fiber: 1, protein: 20, saturatedFat: 1 },
      {name: "Rice", calories: 200, quantityGrams:200, fat: 1, carbohydrates: 20, category: "poultry", fiber: 5, protein: 2, saturatedFat: 1 },

    ]
  )


  constructor() { }


}
