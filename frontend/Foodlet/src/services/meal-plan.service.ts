import { Injectable } from '@angular/core';
import { MealPlan } from '../domain/MealPlan';
import { Recipe } from '../domain/Recipe';
import { FoodItem } from '../domain/FoodItem';
import { Nutrients } from '../domain/Nutrients';
import { FoodRestrictionCompatibility } from '../domain/EFoodRestrictionCompatibility';
import { Observable, of } from 'rxjs';
import { MealPlanConverter } from 'src/utils/firebase/MealPlanConverter';
import { FirebaseStatic } from 'src/utils/firebase/firebase.static';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  data: MealPlan[] = [];

  constructor() {
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter()) //todo: impl
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == 'added'){
            this.data.push(change.doc.data() as MealPlan);
          }
          if (change.type == 'modified') {
            let index = this.data.findIndex(
              (plan) => plan.id == change.doc.id
            );
            this.data[index] = change.doc.data() as MealPlan;
          }
          if (change.type == 'removed') {
            let index = this.data.findIndex(
              (plan) => plan.id == change.doc.id
            );
            this.data.splice(index, 1);
          }
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
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter())
      .add(plan);
  }

  getMealPlans(): MealPlan[] {
    return this.mockMealPlan;
  }

  updatePlan(plan: MealPlan) {
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/plans`)
      .withConverter(new MealPlanConverter()) //todo: impl
      .doc(plan.id)
      .set(plan);
  }

  deletePlan(plan: MealPlan) {
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/plans`)
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

    FirebaseStatic.functions().httpsCallable()
  }

  updateMealPlanRecipe(mealPlanDays: MealPlan) {
    this.updatePlan(mealPlanDays);
  }

  addMealPlanForWeek(mealPlanForWeek: MealPlan[]) {
    mealPlanForWeek.forEach(
      (mealPlan) => (this.addPlan(mealPlan), console.log(mealPlan))
    );
  }
}
