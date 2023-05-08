import {Component, Input} from '@angular/core';
import {FoodItem} from "../../../domain/Recipe";
import {Nutrient} from "../../../domain/Nutrient";
import {sumNutrients} from "../../../domain/converters";

@Component({
  selector: 'app-nutrient-table-compact',
  templateUrl: './nutrient-table-compact.component.html',
  styleUrls: ['./nutrient-table-compact.component.scss']
})
export class NutrientTableCompactComponent {
  @Input() foodItems: FoodItem[] = []

  totalNutrients: Nutrient[] = []
  displayedColumns: string[] = ['name', 'amount'];


  ngOnInit(): void {
    this.totalNutrients = sumNutrients(
      this.foodItems.map(
        (foodItem: { nutrients: Nutrient[]; }
        ) => foodItem.nutrients).flat()
    )
  }

  constructor() { }
}
