import { Recipe } from '../../domain/Recipe';
import { MealPlan } from '../../domain/MealPlan';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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
    return {} as MealPlan;
  }

  toFirestore(model: Partial<MealPlan>): DocumentData;
  toFirestore(model: MealPlan): DocumentData {
    return {};
  }
}
