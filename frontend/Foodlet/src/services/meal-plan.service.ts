import { Injectable } from '@angular/core';
import { MealPlan } from '../domain/MealPlan';
import { Recipe } from '../domain/Recipe';
import { FoodItem } from '../domain/FoodItem';
import { Nutrients } from '../domain/Nutrients';
import { FoodRestrictionCompatibility } from '../domain/EFoodRestrictionCompatibility';
import { Observable, of } from 'rxjs';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { MealPlanConverter } from 'src/utils/firebase/MealPlanConverter';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  data: MealPlan[] = [];

  constructor() {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter()) //todo: impl
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data() as MealPlan);
        });
      }, console.error);
  }

  getPlans(): Observable<MealPlan[]> {
    return of(this.data);
  }

  getPlan(id: string): MealPlan {
    return this.data.find((plan) => plan.id == id)!;
  }

  addPlan(plan: MealPlan) {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter()) //todo: impl
      .add(plan);
  }

  getMealPlans(): MealPlan[] {
    return this.mockMealPlan;
  }

  updatePlan(plan: MealPlan) {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter()) //todo: impl
      .doc(plan.id)
      .update(plan);
  }

  deletePlan(plan: MealPlan) {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter()) //todo: impl
      .doc(plan.id)
      .delete();
  }

  addEditPlan(selected: MealPlan) {
    if (selected.id == '') {
      this.addPlan(selected);
    } else {
      this.updatePlan(selected);
    }
  }

  mockMealPlan: MealPlan[] = [
    {
      id: 'ID',
      date: new Date(2023, 4, 22),
      recipe: Recipe.fullRecipe(
        'ID',
        'Pork and Rice',
        'A very distinct and unique description of a delicious recipe',
        [
          new FoodItem(
            'Pork Sirloin',
            400,
            'Meat',
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)
          ),
          new FoodItem(
            'Rice',
            200,
            'Grain',
            new Nutrients(250, 4, 1.52, 0, 0, 120)
          ),
        ],
        4,
        ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          FoodRestrictionCompatibility.DAIRY_FREE,
          FoodRestrictionCompatibility.GLUTEN_FREE,
          FoodRestrictionCompatibility.VEGAN,
          FoodRestrictionCompatibility.VEGETARIAN,
        ],
        new Date()
      ),
    },
    {
      id: 'ID',
      date: new Date(2023, 4, 23),
      recipe: Recipe.fullRecipe(
        'ID',
        'Recipe Pork and Rice',
        'A very distinct and unique description of a delicious recipe',
        [
          new FoodItem(
            'Pork Sirloin',
            400,
            'Meat',
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)
          ),
          new FoodItem(
            'Rice',
            200,
            'Grain',
            new Nutrients(250, 4, 1.52, 0, 0, 120)
          ),
        ],
        4,
        ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          FoodRestrictionCompatibility.DAIRY_FREE,
          FoodRestrictionCompatibility.GLUTEN_FREE,
          FoodRestrictionCompatibility.VEGAN,
          FoodRestrictionCompatibility.VEGETARIAN,
        ],
        new Date()
      ),
    },
    {
      id: 'ID',
      date: new Date(2023, 4, 24),
      recipe: Recipe.fullRecipe(
        'ID',
        'Pork and Rice Name',
        'A very distinct and unique description of a delicious recipe',
        [
          new FoodItem(
            'Pork Sirloin',
            400,
            'Meat',
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)
          ),
          new FoodItem(
            'Rice',
            200,
            'Grain',
            new Nutrients(250, 4, 1.52, 0, 0, 120)
          ),
        ],
        4,
        ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          FoodRestrictionCompatibility.DAIRY_FREE,
          FoodRestrictionCompatibility.GLUTEN_FREE,
          FoodRestrictionCompatibility.VEGAN,
          FoodRestrictionCompatibility.VEGETARIAN,
        ],
        new Date()
      ),
    },
    {
      id: 'ID',
      date: new Date(2023, 4, 25),
      recipe: Recipe.fullRecipe(
        'ID',
        'RecipePork and Rice Name',
        'A very distinct and unique description of a delicious recipe',
        [
          new FoodItem(
            'Pork Sirloin',
            400,
            'Meat',
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)
          ),
          new FoodItem(
            'Rice',
            200,
            'Grain',
            new Nutrients(250, 4, 1.52, 0, 0, 120)
          ),
        ],
        4,
        ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          FoodRestrictionCompatibility.DAIRY_FREE,
          FoodRestrictionCompatibility.GLUTEN_FREE,
          FoodRestrictionCompatibility.VEGAN,
          FoodRestrictionCompatibility.VEGETARIAN,
        ],
        new Date()
      ),
    },
    {
      id: 'ID',
      date: new Date(2023, 4, 26),
      recipe: Recipe.fullRecipe(
        'ID',
        'Recipe NamePork and Rice',
        'A very distinct and unique description of a delicious recipe',
        [
          new FoodItem(
            'Pork Sirloin',
            400,
            'Meat',
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)
          ),
          new FoodItem(
            'Rice',
            200,
            'Grain',
            new Nutrients(250, 4, 1.52, 0, 0, 120)
          ),
        ],
        4,
        ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          FoodRestrictionCompatibility.DAIRY_FREE,
          FoodRestrictionCompatibility.GLUTEN_FREE,
          FoodRestrictionCompatibility.VEGAN,
          FoodRestrictionCompatibility.VEGETARIAN,
        ],
        new Date()
      ),
    },
    {
      id: 'ID',
      date: new Date(2023, 4, 27),
      recipe: Recipe.fullRecipe(
        'ID',
        'Pork and RiceRecipe Name',
        'A very distinct and unique description of a delicious recipe',
        [
          new FoodItem(
            'Pork Sirloin',
            400,
            'Meat',
            new Nutrients(192, 26, 8.8, 2.8, 0, 0)
          ),
          new FoodItem(
            'Rice',
            200,
            'Grain',
            new Nutrients(250, 4, 1.52, 0, 0, 120)
          ),
        ],
        4,
        ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          FoodRestrictionCompatibility.DAIRY_FREE,
          FoodRestrictionCompatibility.GLUTEN_FREE,
          FoodRestrictionCompatibility.VEGAN,
          FoodRestrictionCompatibility.VEGETARIAN,
        ],
        new Date()
      ),
    },
  ];

  generateMealPlan(maxNutrients: number, mealPlans: MealPlan[]) {
    let dates: String[] = mealPlans.map((mealPlan) =>
      mealPlan.date.toDateString()
    );

    let dto = {
      calories: maxNutrients,
      dates: dates,
    };

    // return this.http.post<MealPlan[]>(this.baseUrl + 'mealplan/generate', dto);
  }

  updateMealPlanRecipe(mealPlanDays: MealPlan) {}

  addMealPlanForWeek(mealPlanForWeek: MealPlan[]) {}
}
