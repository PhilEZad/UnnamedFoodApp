import {Recipe} from "./Recipe";

export interface MealPlan {
    id: string;
    date: Date;
    recipe: Recipe;
}
