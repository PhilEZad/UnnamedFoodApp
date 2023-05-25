import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { FoodItem } from 'src/domain/FoodItem';
import { FoodItemConverter } from 'src/utils/firebase/FoodItemConverter';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  data: FoodItem[] = [];
  fire: Firestore;

  constructor(firestore: Firestore) {
    this.fire = firestore;

    onSnapshot(
      collection(this.fire, 'ingredients').withConverter(
        new FoodItemConverter()
      ),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data());
        });
      },
      console.error
    );
  }

  getIngredients(): Observable<FoodItem[]> {
    return of(this.data);
  }

  getIngredient(id: string): FoodItem {
    return this.data.find((ingredient) => ingredient.id == id)!;
  }

  addIngredient(ingredient: FoodItem) {
    addDoc(collection(this.fire, 'ingredients').withConverter(
      new FoodItemConverter(),
    ), ingredient);
  }

  updateIngredient(ingredient: FoodItem) {
    updateDoc(
      doc(this.fire, 'ingredients', ingredient.id).withConverter(
        new FoodItemConverter()
      ),
      ingredient
    );
  }

  deleteIngredient(ingredient: FoodItem) {
    if (ingredient.isPublic == false) {
      deleteDoc(doc(this.fire, 'ingredients', ingredient.id));
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
