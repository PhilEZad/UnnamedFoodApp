import { Injectable } from '@angular/core';
import { Recipe } from 'src/domain/Recipe';
import { Observable, of } from 'rxjs';
import { RecipeConverter } from 'src/utils/firebase/RecipeConverter';
import { FirebaseStatic } from 'src/utils/firebase/firebase.static';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  data: Recipe[] = [];

  constructor() {
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/recipes`)
      .withConverter(new RecipeConverter())
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == 'added')
            if (!this.data.find((recipe) => recipe.id == change.doc.id))
              this.data.push(change.doc.data() as Recipe);
          if (change.type == 'modified') {
            let index = this.data.findIndex(
              (recipe) => recipe.id == change.doc.id
            );
            this.data[index] = change.doc.data() as Recipe;
          }
          if (change.type == 'removed') {
            let index = this.data.findIndex(
              (recipe) => recipe.id == change.doc.id
            );
            this.data.splice(index, 1);
          }
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
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/recipes`)
      .withConverter(new RecipeConverter())
      .add(recipe);
  }

  updateRecipe(recipe: Recipe) {
    if (recipe.isPublic == false) {
      FirebaseStatic.firestore()
        .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/recipes`)
        .withConverter(new RecipeConverter())
        .doc(recipe.id)
        .update(recipe);
    }
  }

  deleteRecipe(recipe: Recipe) {
    FirebaseStatic.firestore()
      .collection(`users/${FirebaseStatic.auth().currentUser?.uid}/recipes`)
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
