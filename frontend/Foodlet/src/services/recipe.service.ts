import { Injectable } from '@angular/core';
import { Recipe } from 'src/domain/Recipe';
import { Observable, of } from 'rxjs';
import { RecipeConverter } from 'src/utils/firebase/RecipeConverter';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  data: Recipe[] = [];
  firestore: Firestore;

  constructor(private fire: Firestore) {
    this.firestore = fire;

    onSnapshot(
      collection(this.fire, 'recipes').withConverter(new RecipeConverter()),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.data.push(change.doc.data());
        });
      },
      console.error
    );
  }

  getRecipes(): Observable<Recipe[]> {
    return of(this.data);
  }

  getRecipe(id: string): Recipe {
    return this.data.find((recipe) => recipe.id == id)!;
  }

  addRecipe(recipe: Recipe) {
    addDoc(collection(this.fire, 'recipes').withConverter(
      new RecipeConverter(),
    ), recipe);
  }

  updateRecipe(recipe: Recipe) {
    if (recipe.isPublic == false) {
      updateDoc(
        doc(this.fire, 'recipes', recipe.id).withConverter(
          new RecipeConverter()
        ),
        recipe
      );
    }
  }

  deleteRecipe(recipe: Recipe) {
    if (recipe.isPublic == false) {
      deleteDoc(doc(this.fire, 'recipes', recipe.id));
    }
  }

  addEditRecipe(selected: Recipe) {
    if (selected.id == '') {
      this.addRecipe(selected);
    } else {
      this.updateRecipe(selected);
    }
  }
}
