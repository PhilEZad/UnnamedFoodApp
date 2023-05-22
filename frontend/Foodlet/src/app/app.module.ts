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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
