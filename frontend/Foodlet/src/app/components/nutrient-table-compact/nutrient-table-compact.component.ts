import {Component, Input} from '@angular/core';
import {FoodItem} from "../../../domain/Recipe";
import {sumNutrients} from "../../../domain/converters";

@Component({
  selector: 'app-nutrient-table-compact',
  templateUrl: './nutrient-table-compact.component.html',
  styleUrls: ['./nutrient-table-compact.component.scss']
})
export class NutrientTableCompactComponent {
  @Input() foodItems: FoodItem[] = []

  totalNutrients: Map<string, number> = new Map<string, number>()
  displayedColumns: string[] = ['name', 'amount'];


  ngOnInit(): void {

  }

  constructor() { }
}
