import {DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions} from "@angular/fire/firestore";
import {Recipe} from "../../domain/Recipe";
import {SetOptions} from "@angular/fire/compat/firestore";
import {MealPlan} from "../../domain/MealPlan";

class WithFieldValue<T> {
}

class PartialWithFieldValue<T> {
}

class MealPlanConverter implements FirestoreDataConverter<MealPlan> {
  fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options?: SnapshotOptions): MealPlan {
    return {} as MealPlan;
  }

  toFirestore(modelObject: WithFieldValue<MealPlan>): DocumentData;
  toFirestore(modelObject: PartialWithFieldValue<MealPlan>, options: SetOptions): DocumentData;
  toFirestore(modelObject: WithFieldValue<MealPlan> | PartialWithFieldValue<MealPlan>, options?: SetOptions): DocumentData {
    return {

    }
  }

}
