import { Pipe, PipeTransform } from '@angular/core';
import { FoodItem } from 'src/domain/FoodItem';
@Pipe({
  name: 'IngredientFilter',
})
export class IngredientFilterPipe implements PipeTransform {
  transform(items: FoodItem[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return (
        it.name.toLowerCase().includes(searchText) ||
        it.category.toLowerCase().includes(searchText)
      );
    });
  }
}
