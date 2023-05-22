import { Injectable } from '@angular/core';
import { FireService } from './fire.service';
import { Recipe } from 'src/domain/Recipe';
import { Observable, of } from 'rxjs';
import { RecipeConverter } from 'src/utils/firebase/RecipeConverter';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  data: Recipe[] = [];
  listeners: Function[] = [];

  constructor(private fire: FireService) {
    this.listeners.push(
      this.fire.firestore
        .collection('recipes')
        .withConverter(new RecipeConverter())
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            this.data.push(change.doc.data());
          });
        }, console.error)
    );
  }

  getRecipes(): Observable<Recipe[]> {
    return of(this.data);
  }

  getRecipe(id: string): Recipe {
    return this.data.find((recipe) => recipe.id == id) as Recipe;
  }

  addRecipe(recipe: Recipe) {
    this.fire.firestore
      .collection('recipes')
      .withConverter(new RecipeConverter())
      .add(recipe);
  }

  updateRecipe(recipe: Recipe) {
    if (recipe.isPublic == false) {
      this.fire.firestore
        .collection('recipes')
        .doc(recipe.id)
        .withConverter(new RecipeConverter())
        .update(recipe);
    }
  }

  deleteRecipe(recipe: Recipe) {
    if (recipe.isPublic == false) {
      this.fire.firestore.collection('recipes').doc(recipe.id).delete();
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
