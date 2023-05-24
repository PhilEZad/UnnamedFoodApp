
import { Recipe } from '../../../domain/Recipe';
import { ESortingTypes } from '../../../domain/ESortingTypes';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { RecipeService } from 'src/services/recipe.service';
import { FoodRestrictionCompatibility } from '../../../domain/EFoodRestrictionCompatibility';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { RecipeCreatorComponent } from '../../components/recipe-creator/recipe-creator.component';

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
  searchText: string = '';
  currentSortingLabel: string = 'Alphabetical';


  recipes: Recipe[] = [];

  constructor(private dialog: MatDialog, private recipeService: RecipeService) {
    this.sortRecipes(ESortingTypes.Alphabetical);
    recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });

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
        this.currentSorting = ESortingTypes.Alphabetical;
        this.currentSortingLabel = 'Alphabetical';
        break;
      case ESortingTypes.Date:
        this.currentSorting = ESortingTypes.Date;
        this.currentSortingLabel = 'Date';
        break;
      case ESortingTypes.Calories:
        this.currentSorting = ESortingTypes.Calories;
        this.currentSortingLabel = 'Calories';
        break;
      default:
        this.currentSorting = ESortingTypes.Alphabetical;
        this.currentSortingLabel = 'Alphabetical';
    }
  }

  get sortingTypes() {
    return ESortingTypes;
  }
}
