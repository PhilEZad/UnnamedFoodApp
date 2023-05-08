import { Component } from '@angular/core';
import {Recipe} from "../../../domain/Recipe";
import {Nutrient} from "../../../domain/Nutrient";

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
      {name: "Chicken", calories: 100, quantityGrams:100,
        nutrients: [new Nutrient('protein', 10)] },
      {name: "Rice", calories: 200, quantityGrams:100,
        nutrients: [new Nutrient('carbs', 10),
          new Nutrient('protein', 10)] }
    ]
  )


  constructor() { }


}
