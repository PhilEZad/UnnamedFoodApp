import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from '../../../domain/Recipe';
import {RecipeViewComponent} from "../recipe-view/recipe-view.component";
import {MatDialog} from "@angular/material/dialog";
import { sum } from 'src/utils/math';
import {RecipeService} from "../../../services/recipe.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {

  @Output() recipeDeleted = new EventEmitter<Recipe>();
  @Input() recipe: Recipe = new Recipe(
    'Chicken and Rice',
    'A simple recipe for chicken and rice',
    [
      {
        id: '0',
        isPublic: true,
        name: 'Chicken',
        category: '',
        dateAdded: new Date(),
        quantityGrams: 100,
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
        isPublic: true,
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
    [],
    false
  );

  constructor(
    private dialog: MatDialog,
    private recipeService: RecipeService,
    public snack: MatSnackBar
    )
  { }

  deleteRecipe() {
    this.recipeDeleted.emit(this.recipe);
    //this.recipeService.deleteRecipe(this.recipe);
  }

  editRecipe() {
    this.snack.open('Editing recipes is not yet supported. Coming soon!', 'OK', {duration: 3000});

    /*const dialogRef = this.dialog.open(RecipeViewComponent, {
      data: {recipe: this.recipe},
      panelClass: 'recipe-view-dialog',
    }).afterClosed().subscribe(
      (result) => {
        if (result) {
          this.recipe = result;
        }
      }
    );

     */

  }

  openRecipe(recipe: Recipe) {
    const dialogRef = this.dialog.open(RecipeViewComponent, {
      data: {recipe},
      panelClass: 'recipe-view-dialog',
    });
  }

  getCalories() {
    let calories = sum(this.recipe).calories;
    if (calories < 0) calories = 0;
    return calories;
  }
}

