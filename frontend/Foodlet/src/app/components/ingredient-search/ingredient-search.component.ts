import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IngredientService } from 'src/services/ingredient.service';
import { FoodItem } from 'src/domain/FoodItem';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss'],
})
export class IngredientSearchComponent {
  searchText: any;
  owned: FoodItem[] = [];
  favorite: FoodItem[] = [];
  others: FoodItem[] = [];

  constructor(private service: IngredientService) {
    this.service.getIngredients().subscribe((data) => {
      this.others = data;
    });
  }
}
