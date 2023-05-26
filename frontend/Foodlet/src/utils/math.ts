import { Recipe } from 'src/domain/Recipe';
import { filter } from 'rxjs/operators';
import { FoodItem } from 'src/domain/FoodItem';
import { Nutrients } from './../domain/Nutrients';

export function sumNutrients(nutrients: Nutrients[]): Nutrients {
  let sum: Nutrients = new Nutrients(0, 0, 0, 0, 0, 0);

  nutrients.forEach((element) => {
    sum.calories += element.calories;
    sum.protein += element.protein;
    sum.fat += element.fat;
    sum.saturatedFat += element.saturatedFat;
    sum.fiber += element.fiber;
    sum.carbohydrates += element.carbohydrates;
  });

  return sum;
}

export function sumFoodItems(items: FoodItem[]): Nutrients {
  let array: Nutrients[] = [];
  Array.from(items).forEach((item) => {
    array.push(item.nutrients);
  });
  return sumNutrients(array);
}

export function withinLimit(nutrients: Nutrients, limit: Nutrients): boolean {
  return (
    nutrients.calories <= limit.calories &&
    nutrients.protein <= limit.protein &&
    nutrients.fat <= limit.fat &&
    nutrients.saturatedFat <= limit.saturatedFat &&
    nutrients.fiber <= limit.fiber &&
    nutrients.carbohydrates <= limit.carbohydrates
  );
}

export function withinLimits(
  Nutrients: Nutrients[],
  limit: Nutrients
): boolean {
  return Nutrients.every((nutrients) => withinLimit(nutrients, limit));
}

export function filterFoodItems(
  items: FoodItem[],
  limit: Nutrients
): FoodItem[] {
  return items.filter((item) => withinLimit(item.nutrients, limit));
}

export function sum(Recipe: Recipe): Nutrients {
  return sumFoodItems(Recipe.ingredients);
}

export function filterRecipes(recipes: Recipe[], limit: Nutrients): Recipe[] {
  return recipes.filter((recipe) => withinLimit(sum(recipe), limit));
}
