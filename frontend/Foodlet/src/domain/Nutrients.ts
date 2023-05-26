export class Nutrients {
  calories: number = 0;
  protein: number = 0;
  fat: number = 0;
  saturatedFat: number = 0;
  fiber: number = 0;
  carbohydrates: number = 0;

  constructor(
    calories: number,
    protein: number,
    fat: number,
    saturatedFat: number,
    fiber: number,
    carbohydrates: number
  ) {
    this.calories = calories;
    this.protein = protein;
    this.fat = fat;
    this.saturatedFat = saturatedFat;
    this.fiber = fiber;
    this.carbohydrates = carbohydrates;
  }

  static emptyNutrients(): Nutrients {
    return new Nutrients(0, 0, 0, 0, 0, 0);
  }
}
