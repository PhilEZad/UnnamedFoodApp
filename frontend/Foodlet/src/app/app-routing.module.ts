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
import {IsAuthenticatedGuardService} from "../services/authGuards/is-authenticated-guard.service";
import {NotAuthenticatedGuardService} from "../services/authGuards/not-authenticated-guard.service";
//import {
//  AuthGuard,
//  canActivate,
//  redirectLoggedInTo,
//  redirectUnauthorizedTo,
//} from '@angular/fire/auth-guard';
//
//const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['home']);
//const redirectLoggedInToRecipeBook = () => redirectLoggedInTo(['recipes']);

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [NotAuthenticatedGuardService], //Redirect to recipes if logged in
  },
  {
    path: 'recipes',
    component: RecipeBookScreenComponent,
    canActivate: [IsAuthenticatedGuardService], //Redirect to home if not logged in
  },
  {
    path: 'plan',
    component: MealPlanScreenComponent,
    canActivate: [IsAuthenticatedGuardService], //Redirect to home if not logged in
  },
  {
    path: 'fooditem',
    component: IngredientFormComponent,
    canActivate: [IsAuthenticatedGuardService], //Redirect to home if not logged in
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
