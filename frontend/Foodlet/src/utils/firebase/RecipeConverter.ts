import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';
import { FoodRestrictionCompatibility } from 'src/domain/EFoodRestrictionCompatibility';
import { Recipe } from 'src/domain/Recipe';
import {FoodItemConverter} from "./FoodItemConverter";

export class RecipeConverter implements FirestoreDataConverter<Recipe> {
  toFirestore(model: Recipe): DocumentData {
    return {
      id: model.id,
      title: model.title,
      description: model.description,
      servings: model.servings,
      ingredients: {
        ...model.ingredients.map((item) => {
          return new FoodItemConverter().toFirestore(item);
        })
      },
      instructions: model.instructions, //TODO
      diet: model.dietCompatibility,
      isPublic: model.isPublic,
      createdAt: model.dateAdded,
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
    recipe.dateAdded = data.createdAt as Date;

    return recipe;
  }
}
