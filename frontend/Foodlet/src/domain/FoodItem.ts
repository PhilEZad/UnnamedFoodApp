import {Nutrients} from "./Nutrients";

export interface FoodItem {
  id: string
  name: string
  quantityGrams: number
  category: string
  nutrients: Nutrients
}


