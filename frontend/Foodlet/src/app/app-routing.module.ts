import { Recipe } from './../domain/Recipe';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeCreatorComponent } from './components/recipe-creator/recipe-creator.component';
import { HomeComponent } from './screens/home/home.component';
import { RecipeBookScreenComponent } from './screens/recipe-book-screen/recipe-book-screen.component';
import { MealPlanScreenComponent } from './screens/meal-plan-screen/meal-plan-screen.component';
import { CommonModule } from '@angular/common';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    component: RecipeBookScreenComponent,
  },
  {
    path: 'plan',
    component: MealPlanScreenComponent,
  },
  {
    path: 'fooditem',
    component: IngredientFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
