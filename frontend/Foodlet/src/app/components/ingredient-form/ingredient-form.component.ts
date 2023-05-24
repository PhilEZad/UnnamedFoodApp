import { Nutrients } from './../../../domain/Nutrients';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatIcon } from '@angular/material/icon';
import { FoodItem } from 'src/domain/FoodItem';
import { IngredientService } from 'src/services/ingredient.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss'],
})
export class IngredientFormComponent {
  @Input() selected: FoodItem | undefined = FoodItem.emptyFoodItem();

  title: string = '';
  category: string = '';
  weight: number = 0;
  nutrients: Nutrients = Nutrients.emptyNutrients();
  constructor(private service: IngredientService) {}

  ngOnInit(): void {}

  onSubmit() {
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
