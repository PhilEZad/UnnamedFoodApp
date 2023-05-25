import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { IngredientAutocompleteComponent } from './components/ingredient-search/ingredient-search.component';
import { AutocompleteForceSelectionDirective } from './components/ingredient-search/ingredient-search.directive';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { MaxNutrientsDialogComponent } from './components/max-nutrients-dialog/max-nutrients-dialog.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NutrientTableCompactComponent } from './components/nutrient-table-compact/nutrient-table-compact.component';
import { RecipeCardCompactComponent } from './components/recipe-card-compact/recipe-card-compact.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCreatorComponent } from './components/recipe-creator/recipe-creator.component';
import { RecipePickerComponent } from './components/recipe-picker/recipe-picker.component';
import { IngredientAccordionComponent } from './components/recipe-view/ingridient-accordion/ingredient-accordion.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { IngredientFilterPipe } from './pipes/ingredient-filter.pipe';
import { RecipeFilterPipe } from './pipes/recipe-filter.pipe';
import { SortingPipe } from './pipes/sorting-pipe.pipe';
import { UseEnumValuePipe } from './pipes/use-enum-value.pipe';
import { HomeComponent } from './screens/home/home.component';
import { MealPlanScreenComponent } from './screens/meal-plan-screen/meal-plan-screen.component';
import { RecipeBookScreenComponent } from './screens/recipe-book-screen/recipe-book-screen.component';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatOptionModule,
  ],
  declarations: [
    AppComponent,
    RecipeCardComponent,
    NutrientTableCompactComponent,
    RecipeCreatorComponent,
    IngredientFormComponent,
    IngredientAutocompleteComponent,
    RecipeBookScreenComponent,
    IngredientFilterPipe,
    NavigationBarComponent,
    RecipeCardComponent,
    HomeComponent,
    UseEnumValuePipe,
    AutocompleteForceSelectionDirective,
    RecipeViewComponent,
    RecipeFilterPipe,
    SortingPipe,
    IngredientAccordionComponent,
    MealPlanScreenComponent,
    RecipeCardCompactComponent,
    RecipePickerComponent,
    LoginMenuComponent,
    CreateMenuComponent,
    MaxNutrientsDialogComponent,
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    IonicModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatDialogModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatRadioModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const app = firebase.initializeApp(environment.firebaseConfig);

    const store = firebase.firestore(app);
    const auth = firebase.auth(app);
    const functions = firebase.functions(app);

    if (!environment.production) {
      store.useEmulator('localhost', 8080);
      auth.useEmulator('http://localhost:9099');
      functions.useEmulator('localhost', 5001);
    }
  }
}
