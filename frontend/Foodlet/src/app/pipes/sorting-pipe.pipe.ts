import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from "../../domain/Recipe";
import {ESortingTypes} from "../../domain/ESortingTypes";

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(items: Recipe[], sortingType: ESortingTypes): any[] {
    if (!items) return [];
    if (!sortingType) return items;

    switch (sortingType) {
      case ESortingTypes.Alphabetical:
        items.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        break;

      case ESortingTypes.Date:
        items.sort((a, b) => {
          return a.dateAdded.getTime() - b.dateAdded.getTime();
        });
        break;

      case ESortingTypes.Calories:
        items.sort((a, b) => {
          let aCalories = 0;
          a.ingredients.forEach(ingredient => {
            aCalories += ingredient.nutrients.calories;
          });
          let bCalories = 0;
          b.ingredients.forEach(ingredient => {
            bCalories += ingredient.nutrients.calories;
          });

          return aCalories - bCalories;
        });
        break;

    }
     return items;
  }

}
