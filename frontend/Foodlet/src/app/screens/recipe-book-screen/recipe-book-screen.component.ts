import {ESortingTypes} from "../../../domain/ESortingTypes";
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../../../domain/Recipe';
import { RecipeCreatorComponent } from '../../components/recipe-creator/recipe-creator.component';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { RecipeService } from 'src/services/recipe.service';

import {animate, keyframes, state, style, transition, trigger,} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import {FoodRestrictionCompatibility} from "../../../domain/EFoodRestrictionCompatibility";

@Component({
  selector: 'app-recipe-book-screen',
  templateUrl: './recipe-book-screen.component.html',
  styleUrls: ['./recipe-book-screen.component.scss'],
  animations: [
    trigger('inOutAnimation', [
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
  recipes: Recipe[] = [];

  constructor(public dialog: MatDialog, private service: RecipeService) {
    this.service.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  recipes: Recipe[] = recipeMockDate;


  constructor(
    private dialog: MatDialog,
  ) {
    this.sortRecipes(ESortingTypes.Alphabetical);
  }

  recipeIndex(recipe: Recipe): number {
    return this.recipes.indexOf(recipe) + 1;
  }

  newRecipe() {
    this.dialog.open(RecipeCreatorComponent, {
      width: '50%',
      height: '80%',
    });
  }

  sortRecipes(sortingType: ESortingTypes) {
    switch (sortingType) {
      case ESortingTypes.Alphabetical:
        this.currentSorting = ESortingTypes.Alphabetical
        this.currentSortingLabel = "Alphabetical"
        break;
      case ESortingTypes.Date:
        this.currentSorting = ESortingTypes.Date
        this.currentSortingLabel = "Date"
        break;
      case ESortingTypes.Calories:
        this.currentSorting = ESortingTypes.Calories
        this.currentSortingLabel = "Calories"
        break;
      default:
        this.currentSorting = ESortingTypes.Alphabetical
        this.currentSortingLabel = "Alphabetical"
    }
  }

  get sortingTypes() {
    return ESortingTypes
  }


}

export const recipeMockDate = [
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
];



