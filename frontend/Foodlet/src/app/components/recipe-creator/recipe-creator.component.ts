import { IngredientService } from './../../../services/ingredient.service';
import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { FoodItem } from 'src/domain/FoodItem';
import { Recipe } from 'src/domain/Recipe';
import { MatFormField } from '@angular/material/form-field';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RecipeService } from 'src/services/recipe.service';
import { MatInput } from '@angular/material/input';
import { FoodRestrictionCompatibility } from 'src/domain/EFoodRestrictionCompatibility';
import { Observable } from 'rxjs';
import { IngredientAutocompleteComponent } from '../ingredient-search/ingredient-search.component';

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.scss'],
})
export class RecipeCreatorComponent {
  FoodRestrictionCompatibility = FoodRestrictionCompatibility;
  availableIngredients: FoodItem[] = [];

  @Input() selected: Recipe = Recipe.emptyRecipe();

  title: string = '';
  description: string = '';
  servings: number = 0;
  ingredients: FoodItem[] = [];
  instructions: string[] = [];
  dietCompatibility: FoodRestrictionCompatibility[] = [
    FoodRestrictionCompatibility.NO_RESTRICTION,
  ];

  constructor(
    public dialogRef: MatDialogRef<RecipeCreatorComponent>,
    private dialog: MatDialog,
    private recipeService: RecipeService,
    @Inject(MAT_DIALOG_DATA) public data: Recipe
  ) {
    if (data)
      this.selected = data;
  }

  ngOnInit(): void {}

  addIngredient(value: FoodItem) {
    this.ingredients.push(value);
  }

  removeIngredient(index: number) {
    this.ingredients = this.ingredients.filter(
      (x) => x != this.ingredients[index]
    );
  }

  addInstruction() {
    this.instructions.push('next step');
  }

  removeInstruction(index: number) {
    this.instructions = this.instructions.filter(
      (x) => x != this.instructions[index]
    );
  }

  removeRestriction(index: number) {
    this.dietCompatibility = this.dietCompatibility.filter(
      (x) => x != this.dietCompatibility[index]
    );
  }
  addRestriction() {
    this.dietCompatibility.push(FoodRestrictionCompatibility.NO_RESTRICTION);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.selected = new Recipe(
      this.title,
      this.description,
      this.ingredients,
      this.servings,
      this.instructions,
      this.dietCompatibility,
      false
    );

    this.recipeService.addEditRecipe(this.selected);
    this.dialogRef.close(this.selected);
  }

  onSelectRestriction(i: number, key: FoodRestrictionCompatibility) {
    this.dietCompatibility[i] = key;
  }
}
