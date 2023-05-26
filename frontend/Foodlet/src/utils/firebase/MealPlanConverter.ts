import { MealPlan } from 'src/domain/MealPlan';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { RecipeConverter } from './RecipeConverter';
import {Recipe} from "../../domain/Recipe";
import {FoodItem} from "../../domain/FoodItem";
import {FoodRestrictionCompatibility} from "../../domain/EFoodRestrictionCompatibility";

type DataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;
type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type SnapshotOptions = firebase.firestore.SnapshotOptions;
type SetOptions = firebase.firestore.SetOptions;

export class MealPlanConverter implements DataConverter<MealPlan> {
  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    _: SnapshotOptions
  ): MealPlan {
    let model: MealPlan = MealPlan.empty();
    let data = snapshot.data() as any;

    model.id = snapshot.id;
    model.date = (data.date as firebase.firestore.Timestamp).toDate();
    let recipeData = data.recipe as QueryDocumentSnapshot<DocumentData>;
    model.recipe = this.loadRecipeData(recipeData);

    let dateData = model.recipe.dateAdded;
    model.recipe.dateAdded = new Date(dateData);

    console.log(model)

    return model;
  }

  private loadRecipeData(recipeData: QueryDocumentSnapshot<DocumentData>): Recipe {
    let recipe = Recipe.emptyRecipe();
    let data = recipeData as any;

    recipe.id = recipeData.id as string;
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

  toFirestore(model: Partial<MealPlan>): DocumentData;
  toFirestore(model: MealPlan): DocumentData {
    return {
      date: model.date,
      recipe: new RecipeConverter().toFirestore(model.recipe),
    };
  }
}
