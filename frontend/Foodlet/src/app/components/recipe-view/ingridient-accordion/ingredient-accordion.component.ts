import {Component, Input} from '@angular/core';
import {FoodItem} from "../../../../domain/FoodItem";

@Component({
  selector: 'app-ingridient-accordion',
  templateUrl: './ingredient-accordion.component.html',
  styleUrls: ['./ingredient-accordion.component.scss']
})
export class IngredientAccordionComponent {

  @Input() ingredients: FoodItem[] = [];
}
