import { FoodRestrictionCompatibility } from 'src/domain/EFoodRestrictionCompatibility';
import { Recipe } from 'src/domain/Recipe';
import { FoodItemConverter } from './FoodItemConverter';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {FoodItem} from "../../domain/FoodItem";

type DataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;
type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type SnapshotOptions = firebase.firestore.SnapshotOptions;

export class RecipeConverter implements DataConverter<Recipe> {
  toFirestore(model: Recipe): DocumentData {
    console.log(model.dietCompatibility);
    console.log(JSON.stringify(model.dietCompatibility))
    return {
      title: model.title,
      description: model.description,
      servings: model.servings,
      ingredients: JSON.stringify(model.ingredients),
      instructions: model.instructions, //TODO
      diet: JSON.stringify(model.dietCompatibility) as string,
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

    recipe.ingredients = JSON.parse(data.ingredients as string) as FoodItem[];
    recipe.instructions = data.instructions as string[];

    console.log(data.diet as string);

    let json = JSON.parse(data.diet as string) as FoodRestrictionCompatibility[];
    console.log(json);
    recipe.dietCompatibility = json;

    recipe.isPublic = data.isPublic as boolean;
    recipe.dateAdded = (
      data.createdAt as firebase.firestore.Timestamp
    ).toDate();

    return recipe;
  }


}
