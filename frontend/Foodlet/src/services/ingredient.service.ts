import { Injectable } from '@angular/core';
import { FireService } from './fire.service';
import { FoodItem } from 'src/domain/FoodItem';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private data: FoodItem[] = [];
  static listener: any;

  constructor(private fire: FireService) {
    IngredientService.listener = this.fire.firestore
      .collection('ingredients')
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          let ingredient = doc.data();
          this.data.push(ingredient as FoodItem);
        });
      }, console.error);
  }

  getIngredients(): FoodItem[] {
    return this.data;
  }

  getIngredient(id: string): FoodItem {
    return this.data.find((ingredient) => ingredient.id == id) as FoodItem;
  }

  addIngredient(ingredient: FoodItem) {
    this.fire.firestore.collection('ingredients').add(ingredient);
  }

  updateIngredient(ingredient: FoodItem) {
    if (ingredient.isPublic == false) {
      this.fire.firestore
        .collection('ingredients')
        .doc(ingredient.id)
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
