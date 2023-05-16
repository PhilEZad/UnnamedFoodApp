import { Component, Input } from '@angular/core';
import { Recipe } from '../../../domain/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipeNumber: number = 1;

  @Input() recipe: Recipe = new Recipe(
    'Chicken and Rice',
    4,
    ['Cook the chicken', 'Cook the rice', 'Mix them together'],
    [
      {
        id: '0',
        isPublic: true,
        name: 'Chicken',
        category: '',
        dateAdded: new Date(),
        quantityGrams: 100,
        nutrients: {
          protein: 20,
          carbohydrates: 20,
          fat: 20,
          saturatedFat: 20,
          fiber: 20,
          calories: 0,
        },
      },
      {
        id: '1',
        isPublic: true,
        name: 'Rice',
        quantityGrams: 200,
        category: '',
        dateAdded: new Date(),
        nutrients: {
          calories: 200,
          fat: 1,
          carbohydrates: 20,
          fiber: 5,
          protein: 2,
          saturatedFat: 1,
        },
      },
    ]
  );

  deleteRecipe() {}
  editRecipe() {}
}
