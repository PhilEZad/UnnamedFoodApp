import {Nutrient} from "./Nutrient";
import {FoodItem} from "./Recipe";

export function foodItemToNutrients(foodItem: FoodItem) {
    return foodItem.nutrients.map((nutrient: { name: any; amount: number; }) => {
        return new Nutrient(nutrient.name, nutrient.amount * foodItem.quantityGrams);
    });
}

export function sumNutrients(nutrients: Nutrient[]) {
    let sum = new Map<string, number>();
    nutrients.forEach((nutrient: { name: any; amount: number; }) => {
        if (sum.has(nutrient.name)) {
            sum.set(nutrient.name, sum.get(nutrient.name)? + nutrient.amount: nutrient.amount)
        }
        else {
            sum.set(nutrient.name, nutrient.amount);
        }
    });

    let totalNutrients = [] as Nutrient[];

    sum.forEach((value: number, key: string) => {
        totalNutrients.push(new Nutrient(key, value));
    });

    return totalNutrients;
}
