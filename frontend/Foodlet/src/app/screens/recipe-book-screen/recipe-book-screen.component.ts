import { Component } from '@angular/core';
import {Recipe} from "../../../domain/Recipe";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-recipe-book-screen',
  templateUrl: './recipe-book-screen.component.html',
  styleUrls: ['./recipe-book-screen.component.scss'],
  animations: [trigger('inOutAnimation', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      animate(
        300,
        keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 0.25, offset: 0.25 }),
          style({ opacity: 0.5, offset: 0.5 }),
          style({ opacity: 0.75, offset: 0.75 }),
          style({ opacity: 1, offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        300,
        keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0.75, offset: 0.25 }),
          style({ opacity: 0.5, offset: 0.5 }),
          style({ opacity: 0.25, offset: 0.75 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]),
  ]),
  ],
})
export class RecipeBookScreenComponent {

  recipes: Recipe[] = [
    new Recipe(
      "Chicken and Rice",
      4,
      ["Cook the chicken", "Cook the rice", "Mix them together"],
      [
        {id: "0", name: "Chicken", category: "", quantityGrams: 100, nutrients: {
            protein: 20, carbohydrates: 20, fat: 20, saturatedFat: 20, fiber: 20,
            calories: 0
          } },
        {id: "1", name: "Rice", quantityGrams: 200, category:"", nutrients: {calories: 200, fat: 1, carbohydrates: 20, fiber: 5, protein: 2, saturatedFat: 1 }},

      ],
    ),
    ];



  constructor() {}


  recipeIndex(recipe: Recipe): number {
    return this.recipes.indexOf(recipe) + 1;
  }

  newRecipe() {
    this.recipes.push(new Recipe("New Recipe", 1, [], []));
  }
}
