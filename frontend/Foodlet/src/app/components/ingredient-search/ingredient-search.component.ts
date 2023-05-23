import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NEVER, Observable } from 'rxjs';
import { FoodItem } from 'src/domain/FoodItem';
import { IngredientService } from 'src/services/ingredient.service';

@Component({
  selector: 'ingredient-autocomplete',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss'],
})
export class IngredientAutocompleteComponent {
  constructor(private service: IngredientService) {
    this.service.getIngredients().subscribe((data) => {
      this.options = data;
    });

    this.filteredOptions = this.searchBar.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  @Output() selected = new EventEmitter<FoodItem>();

  options: any[] = null!;

  filteredOptions: Observable<any[]>;
  searchBar = new FormControl();
  quantity = new FormControl();

  private _filter(value: string) {
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  displayFn(value: any) {
    return value ? value.name : '';
  }

  onAutoCompleteClosed(event: any) {}

  update() {
    (this.searchBar.value as FoodItem).quantityGrams = this.quantity.value;
    this.selected.emit(this.searchBar.value);
  }
}
