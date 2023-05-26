import { FoodItem } from 'src/domain/FoodItem';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

type DataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;
type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;
type SnapshotOptions = firebase.firestore.SnapshotOptions;

export class FoodItemConverter implements DataConverter<FoodItem> {
  toFirestore(model: FoodItem): DocumentData {
    return {
      name: model.name,
      quantityGrams: model.quantityGrams,
      category: model.category,
      calories: model.nutrients.calories,
      protein: model.nutrients.protein,
      saturatedFat: model.nutrients.saturatedFat,
      fat: model.nutrients.fat,
      carbohydrates: model.nutrients.carbohydrates,
      fiber: model.nutrients.fiber,
      createdAt: model.dateAdded,
    };
  }

  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    _: SnapshotOptions
  ): FoodItem {
    let foodItem = FoodItem.emptyFoodItem();
    let data = snapshot.data() as any;

    foodItem.id = snapshot.id;
    foodItem.name = data.name;
    foodItem.quantityGrams = data.quantityGrams;
    foodItem.category = data.category;
    foodItem.dateAdded = data.createdAt;
    foodItem.nutrients.calories = data.calories;
    foodItem.nutrients.protein = data.protein;
    foodItem.nutrients.saturatedFat = data.saturatedFat;
    foodItem.nutrients.fat = data.fat;
    foodItem.nutrients.carbohydrates = data.carbohydrates;
    foodItem.nutrients.fiber = data.fiber;
    return foodItem;
  }
}
