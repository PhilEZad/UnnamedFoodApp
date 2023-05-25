import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodItem } from 'src/domain/FoodItem';
import { FoodItemConverter } from 'src/utils/firebase/FoodItemConverter';
import { FirebaseStatic } from 'src/utils/firebase/firebase.static';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  data: FoodItem[] = [];

  constructor() {
    FirebaseStatic.firestore()
      .collection('foodItems')
      .withConverter(new FoodItemConverter())
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data());
          console.log(change.doc.data());
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
    FirebaseStatic.firestore()
      .collection('foodItems')
      .withConverter(new FoodItemConverter())
      .add(ingredient);
  }

  updateIngredient(ingredient: FoodItem) {
    FirebaseStatic.firestore()
      .collection('foodItems')
      .withConverter(new FoodItemConverter())
      .doc(ingredient.id)
      .update(ingredient);
  }

  deleteIngredient(ingredient: FoodItem) {
    if (ingredient.isPublic == false) {
      FirebaseStatic.firestore()
        .collection('foodItems')
        .doc(ingredient.id)
        .delete();
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
