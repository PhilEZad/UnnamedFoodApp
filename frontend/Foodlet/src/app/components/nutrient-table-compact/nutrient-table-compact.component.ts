import { Component, Input } from '@angular/core';
import { FoodItem } from '../../../domain/FoodItem';
import { sumFoodItems } from 'src/utils/math';

@Component({
  selector: 'app-nutrient-table-compact',
  templateUrl: './nutrient-table-compact.component.html',
  styleUrls: ['./nutrient-table-compact.component.scss'],
})
export class NutrientTableCompactComponent {
  @Input() foodItems: FoodItem[] = [];

  nutrients: any[] = [];

  nutrientsMap: Map<string, number> = new Map<string, number>();
  displayedColumns: string[] = ['name', 'amount'];
  private nutrientKeys: string[] = [
    'Protein',
    'Carbohydrates',
    'Fats',
    'Saturated Fats',
    'Fiber',
  ];

  ngOnInit(): void {
    if (false) this.nutrientsMap = oldSum(this.nutrients, this.foodItems);
    else {
      let sum = sumFoodItems(this.foodItems);

      this.nutrientsMap.set('Protein', sum.protein);
      this.nutrientsMap.set('Carbohydrates', sum.carbohydrates);
      this.nutrientsMap.set('Fats', sum.fat);
      this.nutrientsMap.set('Saturated Fats', sum.saturatedFat);
      this.nutrientsMap.set('Fiber', sum.fiber);

      this.nutrientKeys.forEach((value) => {
        this.nutrients.push({
          name: value,
          amount: this.nutrientsMap.get(value),
        });
      });
    }
  }

  constructor() {}
}

function oldSum(nutrients: any[], foodItems: FoodItem[]): Map<string, number> {
  let nutrientsMap: Map<string, number> = new Map<string, number>();
  let nutrientKeys: string[] = [
    'Protein',
    'Carbohydrates',
    'Fats',
    'Saturated Fats',
    'Fiber',
  ];

  nutrientKeys.forEach((value) => {
    nutrientsMap.set(value, 0);
  });

  foodItems.forEach((value) => {
    nutrientsMap.set(
      'Protein',
      value.nutrients.protein + nutrientsMap.get('Protein')!
    );
    nutrientsMap.set(
      'Carbohydrates',
      value.nutrients.carbohydrates + nutrientsMap.get('Carbohydrates')!
    );
    nutrientsMap.set('Fats', value.nutrients.fat + nutrientsMap.get('Fats')!);
    nutrientsMap.set(
      'Saturated Fats',
      value.nutrients.saturatedFat + nutrientsMap.get('Saturated Fats')!
    );
    nutrientsMap.set(
      'Fiber',
      nutrientsMap.get('Fiber')! + value.nutrients.fiber
    );
  });

  nutrientKeys.forEach((value) => {
    nutrients.push({
      name: value,
      amount: nutrientsMap.get(value),
    });
  });

  return nutrientsMap;
}
