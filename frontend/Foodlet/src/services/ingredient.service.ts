import { Injectable } from '@angular/core';
import { FireService } from './fire.service';
import { FoodItem } from 'src/domain/FoodItem';
import { FoodItemConverter } from 'src/utils/firebase/FoodItemConverter';
import { NEVER, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  data: FoodItem[] = [];
  listeners: Function[] = [];

  constructor(private fire: FireService) {
    this.listeners.push(
      this.fire.firestore
        .collection('ingredients')
        .withConverter(new FoodItemConverter())
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            this.data.push(change.doc.data());
          });
        }, console.error)
    );
  }

  getIngredients(): Observable<FoodItem[]> {
    return of(this.data);
  }

  getIngredient(id: string): FoodItem {
    return this.data.find((ingredient) => ingredient.id == id) as FoodItem;
  }

  addIngredient(ingredient: FoodItem) {
    this.fire.firestore
      .collection('ingredients')
      .withConverter(new FoodItemConverter())
      .add(ingredient);
  }

  updateIngredient(ingredient: FoodItem) {
    if (ingredient.isPublic == false) {
      this.fire.firestore
        .collection('ingredients')
        .doc(ingredient.id)
        .withConverter(new FoodItemConverter())
        .update(ingredient);
    }
  }

  deleteIngredient(ingredient: FoodItem) {
    if (ingredient.isPublic == false) {
      this.fire.firestore.collection('ingredients').doc(ingredient.id).delete();
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
