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
      {id: "0", name: "Chicken", category: "", quantityGrams: 100, nutrients: {
        protein: 20, carbohydrates: 20, fat: 20, saturatedFat: 20, fiber: 20,
        calories: 0
      } },
      {id: "1", name: "Rice", quantityGrams: 200, category:"", nutrients: {calories: 200, fat: 1, carbohydrates: 20, fiber: 5, protein: 2, saturatedFat: 1 }},

    ]
  )


  constructor() { }


}
