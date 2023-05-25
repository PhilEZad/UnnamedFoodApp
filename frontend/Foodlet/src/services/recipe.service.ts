import { Injectable } from '@angular/core';
import { Recipe } from 'src/domain/Recipe';
import { Observable, of } from 'rxjs';
import { RecipeConverter } from 'src/utils/firebase/RecipeConverter';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  data: Recipe[] = [];

  constructor() {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/recipes}`)
      .withConverter(new RecipeConverter())
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data() as Recipe);
        });
      }, console.error);
  }

  getRecipes(): Observable<Recipe[]> {
    return of(this.data);
  }

  getRecipe(id: string): Recipe {
    return this.data.find((recipe) => recipe.id == id)!;
  }

  addRecipe(recipe: Recipe) {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/recipes}`)
      .withConverter(new RecipeConverter())
      .add(recipe);
  }

  updateRecipe(recipe: Recipe) {
    if (recipe.isPublic == false) {
      firebase
        .firestore()
        .collection(`users/${firebase.auth().currentUser?.uid}/recipes}`)
        .withConverter(new RecipeConverter())
        .doc(recipe.id)
        .update(recipe);
    }
  }

  deleteRecipe(recipe: Recipe) {
    firebase
      .firestore()
      .collection(`users/${firebase.auth().currentUser?.uid}/recipes}`)
      .doc(recipe.id)
      .delete();
  }

  addEditRecipe(selected: Recipe) {
    if (selected.id == '') {
      this.addRecipe(selected);
    } else {
      this.updateRecipe(selected);
    }
  }
}
