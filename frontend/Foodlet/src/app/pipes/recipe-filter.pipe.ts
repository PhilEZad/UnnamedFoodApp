import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../../domain/Recipe";

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(items: Recipe[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return (
        it.title.toLowerCase().includes(searchText) ||
        it.dietCompatibility.toString().toLowerCase().includes(searchText) ||
        it.description.toLowerCase().includes(searchText)
      );
    });
  }

}
