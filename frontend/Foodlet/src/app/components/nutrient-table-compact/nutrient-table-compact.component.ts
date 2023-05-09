import {Component, Input} from '@angular/core';
import {FoodItem} from "../../../domain/Recipe";

@Component({
  selector: 'app-nutrient-table-compact',
  templateUrl: './nutrient-table-compact.component.html',
  styleUrls: ['./nutrient-table-compact.component.scss']
})
export class NutrientTableCompactComponent {
  @Input() foodItems: FoodItem[] = []

  nutrients: any[] = []

  nutrientsMap: Map<string, number> = new Map<string, number>()
  displayedColumns: string[] = ['name', 'amount'];
  private nutrientKeys: string[] = ['Protein', 'Carbohydrates', 'Fats', 'Saturated Fats', 'Fiber']

  ngOnInit(): void {
    this.nutrientKeys.forEach(
      (value) => {
        this.nutrientsMap.set(value, 0)
      }
    )

    this.foodItems.forEach(
     (value) => {
       this.nutrientsMap.set('Protein', value.protein + this.nutrientsMap.get('Protein')!)
       this.nutrientsMap.set('Carbohydrates', value.carbohydrates + this.nutrientsMap.get('Carbohydrates')!)
       this.nutrientsMap.set('Fats', value.fat + this.nutrientsMap.get('Fats')!)
       this.nutrientsMap.set('Saturated Fats', value.saturatedFat + this.nutrientsMap.get('Saturated Fats')!)
       this.nutrientsMap.set('Fiber', this.nutrientsMap.get('Fiber')! + value.fiber)
     }
    )

    this.nutrientKeys.forEach(
      (value) => {
        this.nutrients.push({
          name: value,
          amount: this.nutrientsMap.get(value)
        })
      }
    )

  }

  constructor() { }
}
