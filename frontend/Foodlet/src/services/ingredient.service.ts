import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodItem } from 'src/domain/FoodItem';
import { FoodItemConverter } from 'src/utils/firebase/FoodItemConverter';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  data: FoodItem[] = [];

  constructor() {
    firebase
      .firestore()
      .collection('foodItems')
      .withConverter(new FoodItemConverter())
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data());
        });
      }, console.error);
  }

  getIngredients(): Observable<FoodItem[]> {
    return of(this.data);
  }

  getIngredient(id: string): FoodItem {
    return this.data.find((ingredient) => ingredient.id == id)!;
  }

  addIngredient(ingredient: FoodItem) {
    firebase
      .firestore()
      .collection('foodItems')
      .withConverter(new FoodItemConverter())
      .add(ingredient);
  }

  updateIngredient(ingredient: FoodItem) {
    firebase
      .firestore()
      .collection('foodItems')
      .withConverter(new FoodItemConverter())
      .doc(ingredient.id)
      .update(ingredient);
  }

  deleteIngredient(ingredient: FoodItem) {
    if (ingredient.isPublic == false) {
      firebase.firestore().collection('foodItems').doc(ingredient.id).delete();
    }
  }

  addEditIngredient(selected: FoodItem) {
    if (selected.id == '') {
      this.addIngredient(selected);
    } else {
      this.updateIngredient(selected);
    }
  }
}
