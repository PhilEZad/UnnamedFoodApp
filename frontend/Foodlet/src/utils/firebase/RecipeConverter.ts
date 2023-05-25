import { FoodRestrictionCompatibility } from 'src/domain/EFoodRestrictionCompatibility';
import { Recipe } from 'src/domain/Recipe';
import { FoodItemConverter } from './FoodItemConverter';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

type DataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;
type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type SnapshotOptions = firebase.firestore.SnapshotOptions;

export class RecipeConverter implements DataConverter<Recipe> {
  toFirestore(model: Recipe): DocumentData {
    return {
      title: model.title,
      description: model.description,
      servings: model.servings,
      ingredients: {
        ...model.ingredients.map((item) => {
          return new FoodItemConverter().toFirestore(item);
        }),
      },
      instructions: model.instructions, //TODO
      diet: model.dietCompatibility,
      isPublic: model.isPublic,
      createdAt: firebase.firestore.Timestamp.fromDate(model.dateAdded),
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
    recipe.dateAdded = (
      data.createdAt as firebase.firestore.Timestamp
    ).toDate();

    return recipe;
  }
}
