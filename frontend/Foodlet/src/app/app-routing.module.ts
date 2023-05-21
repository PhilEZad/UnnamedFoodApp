import { Recipe } from './../domain/Recipe';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeCreatorComponent } from './screens/recipe-creator/recipe-creator.component';
import { HomeComponent } from './screens/home/home.component';
import {RecipeBookScreenComponent} from "./screens/recipe-book-screen/recipe-book-screen.component";
import {MealPlanComponent} from "./screens/meal-plan/meal-plan.component";

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
    path: 'meal-planner',
    component: MealPlanComponent,
  },
  {
    path: 'recipe-creator',
    component: RecipeCreatorComponent,
  },
  {
    path: 'recipe-creator/:id',
    component: RecipeCreatorComponent,
  },
  {
    path: '',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
