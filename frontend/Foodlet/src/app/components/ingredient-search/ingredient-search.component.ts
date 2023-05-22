import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NEVER, Observable } from 'rxjs';
import { FoodItem } from 'src/domain/FoodItem';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'ingredient-autocomplete',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss'],
})
export class IngredientAutocompleteComponent implements OnInit {
  ngOnInit() {
    this.filteredOptions = this.ctl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.address)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  @Input() options: FoodItem[] = [];
  selected: FoodItem = null!;

  filteredOptions: Observable<FoodItem[]> = NEVER;
  ctl = new FormControl();

  get value() {
    return this.selected;
  }

  private _filter(value: string) {
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  displayFn(selected: FoodItem) {
    return selected ? selected.name : 'undefined';
  }

  onAutoCompleteClosed(event: any) {
    console.log(event);
  }

  update() {
    this.selected = this.ctl.value;
  }
}
