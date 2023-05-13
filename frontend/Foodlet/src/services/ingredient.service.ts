import { Injectable } from '@angular/core';
import { FireService } from './fire.service';
import { FoodItem } from 'src/domain/FoodItem';
import { FoodItemConverter } from 'src/utils/firebase/FoodItemConverter';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  static data: FoodItem[] = [];
  static listener: any;

  constructor(private fire: FireService) {
    IngredientService.listener = this.fire.firestore
      .collection('ingredients')
      .withConverter(new FoodItemConverter())
      .onSnapshot((snapshot) => {
        console.log('Ingredients updated');
        snapshot.forEach((doc) => {
          IngredientService.data.push(doc.data());
        });
      }, console.error);
  }

  getIngredients(): FoodItem[] {
    return IngredientService.data;
  }

  getIngredient(id: string): FoodItem {
    return IngredientService.data.find(
      (ingredient) => ingredient.id == id
    ) as FoodItem;
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
