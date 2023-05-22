import {Component, Input} from '@angular/core';
import {Recipe} from "../../../domain/Recipe";
import {MatDialog} from "@angular/material/dialog";
import {RecipeViewComponent} from "../recipe-view/recipe-view.component";

@Component({
  selector: 'app-recipe-card-compact',
  templateUrl: './recipe-card-compact.component.html',
  styleUrls: ['./recipe-card-compact.component.scss']
})
export class RecipeCardCompactComponent {

  @Input() recipe: Recipe = Recipe.emptyRecipe()

  constructor(
    private dialog: MatDialog,
  )
  { }

  deleteRecipe() {}
  editRecipe() {}

  openRecipe(recipe: Recipe) {
    const dialogRef = this.dialog.open(RecipeViewComponent, {
      data: {recipe},
      panelClass: 'recipe-view-dialog',
    });
  }

}
