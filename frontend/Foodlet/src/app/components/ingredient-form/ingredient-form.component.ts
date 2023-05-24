import {Nutrients} from './../../../domain/Nutrients';
import {Component, Input} from '@angular/core';
import {FoodItem} from 'src/domain/FoodItem';
import {IngredientService} from 'src/services/ingredient.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss'],
})
export class IngredientFormComponent {
  @Input() selected: FoodItem | undefined = FoodItem.emptyFoodItem();

  title: string = '';
  category: string = '';
  weight: number = 1;
  nutrients: Nutrients = Nutrients.emptyNutrients();
  constructor(
    private service: IngredientService,
    public snack: MatSnackBar

  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.validateNameAndWeight()) {
      this.snack.open("Name is required and Weight must be 1 or more", "Ok", {duration: 2000});
      return;
    }
    else if (!this.validateNutrients()) {
      this.snack.open("Nutrients must be 1 or more", "Ok", {duration: 2000});
      return;
    }
    else {
      this.selected = new FoodItem(
        this.title,
        this.weight,
        this.category,
        this.nutrients
      );

      this.selected.id = '';
      console.log(this.selected);
      this.service.addEditIngredient(this.selected);
    }
  }

  /**
   * Checks if the weight is above 1 and the name is not empty.
   */
  validateNameAndWeight(): boolean {
    return this.title.length > 0 && this.weight > 1;

  }

  /**
   * Checks if the values of the nutrients are valid, meaning above 0.
   */
  validateNutrients(): boolean {
    return  this.nutrients.calories > 0 && this.nutrients.carbohydrates > 0
      && this.nutrients.fat > 0 && this.nutrients.protein > 0 && this.nutrients.saturatedFat > 0
      && this.nutrients.fiber > 0;
  }
}

