import { Component, Inject, OnInit } from '@angular/core';
import { Recipe } from '../../../domain/Recipe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {matExpansionAnimations} from "@angular/material/expansion";

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion],
})
export class RecipeViewComponent {

  recipe: Recipe = Recipe.emptyRecipe();
  ingredientPanelOpen: boolean = false;
  instructionPanelOpen: boolean = false

  constructor(
    public dialogRef: MatDialogRef<RecipeViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recipe = data.recipe;
  }


  goBack() {
    this.dialogRef.close();
  }
}
