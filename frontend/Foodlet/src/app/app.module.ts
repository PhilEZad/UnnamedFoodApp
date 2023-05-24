import {
  connectFunctionsEmulator,
  getFunctions,
  provideFunctions,
} from '@angular/fire/functions';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { AutocompleteForceSelectionDirective } from './components/ingredient-search/ingredient-search.directive';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NutrientTableCompactComponent } from './components/nutrient-table-compact/nutrient-table-compact.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCreatorComponent } from './components/recipe-creator/recipe-creator.component';
import { IngredientFilterPipe } from './pipes/ingredient-filter.pipe';
import { UseEnumValuePipe } from './pipes/use-enum-value.pipe';
import { HomeComponent } from './screens/home/home.component';
import { RecipeBookScreenComponent } from './screens/recipe-book-screen/recipe-book-screen.component';
import { IngredientAutocompleteComponent } from './components/ingredient-search/ingredient-search.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { RecipeFilterPipe } from './pipes/recipe-filter.pipe';
import { SortingPipe } from './pipes/sorting-pipe.pipe';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { IngredientAccordionComponent } from './components/recipe-view/ingridient-accordion/ingredient-accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MealPlanScreenComponent } from './screens/meal-plan-screen/meal-plan-screen.component';
import { RecipeCardCompactComponent } from './components/recipe-card-compact/recipe-card-compact.component';
import { RecipePickerComponent } from './components/recipe-picker/recipe-picker.component';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { MatRadioModule } from '@angular/material/radio';
import { environment } from '../environments/firebaseConfig';

import {
  initializeApp,
  provideFirebaseApp,
  FirebaseAppModule,
} from '@angular/fire/app';
import {
  connectFirestoreEmulator,
  getFirestore,
  provideFirestore,
  FirestoreModule,
} from '@angular/fire/firestore';

import {
  connectAuthEmulator,
  getAuth,
  provideAuth,
  AuthModule,
} from '@angular/fire/auth';
import {
  connectStorageEmulator,
  getStorage,
  provideStorage,
  StorageModule,
} from '@angular/fire/storage';
import { MaxNutrientsDialogComponent } from './components/max-nutrients-dialog/max-nutrients-dialog.component';

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

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => {
      const auth = getAuth();
      if (!environment.production) {
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true,
        });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (!environment.production) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
    provideStorage(() => {
      const storage = getStorage();
      if (!environment.production) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    }),
    provideFunctions(() => {
      const functions = getFunctions();
      if (!environment.production) {
        connectFunctionsEmulator(functions, 'localhost', 5001);
      }
      return functions;
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
