import {Component, Input} from '@angular/core';
import {FoodItem} from "../../../domain/Recipe";

@Component({
  selector: 'app-nutrient-table-compact',
  templateUrl: './nutrient-table-compact.component.html',
  styleUrls: ['./nutrient-table-compact.component.scss']
})
export class NutrientTableCompactComponent {
  @Input() foodItems: FoodItem[] = []

  nutrients: Map<string, number> = new Map<string, number>()
  displayedColumns: string[] = ['name', 'amount'];


  ngOnInit(): void {
    this.foodItems.forEach(
     (value, index) => {
       this.nutrients.set('Protein', value.protein)

     }
    )
  }

  constructor() { }
}
