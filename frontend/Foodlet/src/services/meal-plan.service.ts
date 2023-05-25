import { Injectable } from '@angular/core';
import { MealPlan } from '../domain/MealPlan';
import { Recipe } from '../domain/Recipe';
import { FoodItem } from '../domain/FoodItem';
import { Nutrients } from '../domain/Nutrients';
import { FoodRestrictionCompatibility } from '../domain/EFoodRestrictionCompatibility';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';
import { getAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  data: MealPlan[] = [];

  constructor(private firestore: Firestore) {
    onSnapshot(
      collection(this.firestore, `users/${getAuth().currentUser?.uid}/plans`),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data() as MealPlan);
        });
      },
      console.error
    );
  }

  getPlans(): Observable<MealPlan[]> {
    return of(this.data);
  }

  getPlan(id: string): MealPlan {
    return this.data.find((plan) => plan.id == id)!;
  }

  addPlan(plan: MealPlan) {
    addDoc(
      collection(this.firestore, `users/${getAuth().currentUser?.uid}/plans`),
      plan
    );
  }

  getMealPlans(): MealPlan[] {
    return this.mockMealPlan;
  }

  updatePlan(plan: MealPlan) {
    updateDoc(
      doc(
        this.firestore,
        `users/${getAuth().currentUser?.uid}/plans/${plan.id}`
      ),
      plan as any
    );
  }

  deletePlan(plan: MealPlan) {
    deleteDoc(
      doc(this.firestore, `users/${getAuth().currentUser?.uid}/plans/${plan.id}`)
    );
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

  generateMealPlan(maxNutrients: number, mealPlans: MealPlan[]) {}
}
