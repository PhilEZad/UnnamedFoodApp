import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { FoodItem } from 'src/domain/FoodItem';
import { Nutrients } from 'src/domain/Nutrients';
import { FireService } from 'src/services/fire.service';
import { IngredientService } from 'src/services/ingredient.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss'],
})
export class IngredientFormComponent {
  @Input() selected: FoodItem | undefined = FoodItem.emptyFoodItem();

  ingredient = this.fb.group({
    id: [this.selected?.id ?? ''],
    title: [this.selected?.name, Validators.required],
    category: [this.selected?.category],
    weight: [this.selected?.quantityGrams, Validators.required],
    nutrients: this.fb.group({
      calories: [this.selected?.nutrients.calories, Validators.required],
      protein: [this.selected?.nutrients.protein, Validators.required],
      saturatedFat: [this.selected?.nutrients.saturatedFat],
      fat: [this.selected?.nutrients.fat, Validators.required],
      carbohydrates: [
        this.selected?.nutrients.carbohydrates,
        Validators.required,
      ],
      fiber: [this.selected?.nutrients.fiber],
    }),
  });

  constructor(private fb: FormBuilder, private service: IngredientService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.ingredient.invalid) {
      return;
    }

    this.selected = new FoodItem(
      this.ingredient.value.title!,
      this.ingredient.value.weight!,
      this.ingredient.value.category ?? '',
      new Nutrients(
        this.ingredient.value.nutrients!.calories!,
        this.ingredient.value.nutrients!.protein!,
        this.ingredient.value.nutrients!.saturatedFat ?? 0,
        this.ingredient.value.nutrients!.fat!,
        this.ingredient.value.nutrients!.fiber ?? 0,
        this.ingredient.value.nutrients!.carbohydrates!
      )
    );
    console.log(this.selected);
    this.service.addEditIngredient(this.selected);
  }
}
