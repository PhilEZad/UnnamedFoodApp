import { MealPlan } from 'src/domain/MealPlan';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { RecipeConverter } from './RecipeConverter';
import {Recipe} from "../../domain/Recipe";

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
    model.recipe = data.recipe as Recipe;

    let dateData = model.recipe.dateAdded;
    model.recipe.dateAdded = new Date(dateData);

    console.log(model)

    return model;
  }

  toFirestore(model: Partial<MealPlan>): DocumentData;
  toFirestore(model: MealPlan): DocumentData {
    return {
      date: model.date,
      recipe: new RecipeConverter().toFirestore(model.recipe),
    };
  }
}
