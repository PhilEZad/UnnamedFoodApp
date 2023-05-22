import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FoodRestrictionCompatibility } from 'src/domain/EFoodRestrictionCompatibility';
import { FoodItem } from 'src/domain/FoodItem';
import { Recipe } from 'src/domain/Recipe';

export type DataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;
type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type SnapshotOptions = firebase.firestore.SnapshotOptions;

export class RecipeConverter implements DataConverter<Recipe> {
  toFirestore(model: Recipe): DocumentData {
    return {
      id: model.id,
      title: model.title,
      description: model.description,
      servings: model.servings,
      ingredients: model.ingredients,
      instructions: model.instructions,
      diet: model.dietCompatibility,
      isPublic: model.isPublic,
    };
  }

  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    _: SnapshotOptions
  ): Recipe {
    let recipe = Recipe.emptyRecipe();
    let data = snapshot.data() as any;

    recipe.id = snapshot.id as string;
    recipe.title = data.title as string;
    recipe.description = data.description as string;
    recipe.servings = data.servings as number;
    recipe.ingredients = data.ingredients as any[];
    recipe.instructions = data.instructions as string[];
    recipe.dietCompatibility = data.diet as FoodRestrictionCompatibility[];
    recipe.isPublic = data.isPublic as boolean;

    return recipe;
  }
}
