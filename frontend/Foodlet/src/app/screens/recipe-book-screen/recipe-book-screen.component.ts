import {Component} from '@angular/core';
import {Recipe} from '../../../domain/Recipe';
import {ESortingTypes} from "../../../domain/ESortingTypes";

import {animate, keyframes, state, style, transition, trigger,} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';

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

  currentSorting: ESortingTypes = ESortingTypes.Alphabetical;
  searchText: string = "";
  currentSortingLabel: string = "Alphabetical"  //TODO FIX

  recipes: Recipe[] = [
    new Recipe(
      'Chicken and Rice',
      4,
      ['Cook the chicken', 'Cook the rice', 'Mix them together'],
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
      ]
    ),
  ];


  constructor(
    private dialog: MatDialog,
  ) {
    this.sortRecipes(ESortingTypes.Alphabetical);
  }

  recipeIndex(recipe: Recipe): number {
    return this.recipes.indexOf(recipe) + 1;
  }

  newRecipe() {
    this.recipes.push(new Recipe('New Recipe', 1, [], []));
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


