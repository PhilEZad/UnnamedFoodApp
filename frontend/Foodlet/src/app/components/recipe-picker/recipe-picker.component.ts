import { Component, Inject } from '@angular/core';
import { Recipe } from '../../../domain/Recipe';
import { FoodItem } from '../../../domain/FoodItem';
import { Nutrients } from '../../../domain/Nutrients';
import { FoodRestrictionCompatibility } from '../../../domain/EFoodRestrictionCompatibility';
import { ESortingTypes } from '../../../domain/ESortingTypes';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-picker',
  templateUrl: './recipe-picker.component.html',
  styleUrls: ['./recipe-picker.component.scss'],
})
export class RecipePickerComponent {
  recipes: Recipe[] = []; //All recipes for the current user

  currentSorting: ESortingTypes = ESortingTypes.Alphabetical;
  searchText: string = '';
  currentSortingLabel: string = 'Alphabetical'; //TODO FIX

  selectedRecipe: Recipe | undefined;

  constructor(
    private dialog: MatDialog,
    private recipeService: RecipeService,
    public dialogRef: MatDialogRef<RecipePickerComponent>
  ) {
    recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });

    this.sortRecipes(ESortingTypes.Alphabetical);
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

  selectRecipe(recipe: Recipe) {
    if (this.selectedRecipe === recipe) {
      this.selectedRecipe = undefined;
      return;
    } else this.selectedRecipe = recipe;
  }

  chooseRecipe() {
    if (this.selectedRecipe) {
      this.dialogRef.close(this.selectedRecipe);
    }
  }
}
