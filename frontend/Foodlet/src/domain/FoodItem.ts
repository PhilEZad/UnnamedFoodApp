import { Nutrients } from './Nutrients';

export class FoodItem {
  id: string = '';
  name: string = '';
  quantityGrams: number = 0;
  category: string = '';
  nutrients: Nutrients = Nutrients.emptyNutrients();
  isPublic: boolean = false;
  dateAdded: Date = new Date()

  constructor(
    name: string,
    quantityGrams: number,
    category: string,
    nutrients: Nutrients
  ) {
    this.name = name;
    this.quantityGrams = quantityGrams;
    this.category = category;
    this.nutrients = nutrients;
  }

  static emptyFoodItem(): FoodItem {
    return new FoodItem('', 0, '', Nutrients.emptyNutrients());
  }
}
