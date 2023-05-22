import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NutrientTableCompactComponent } from './components/nutrient-table-compact/nutrient-table-compact.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RecipeCreatorComponent } from './screens/recipe-creator/recipe-creator.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { IngredientFilterPipe } from './pipes/ingredient-filter.pipe';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './screens/home/home.component';
import { RecipeBookScreenComponent } from './screens/recipe-book-screen/recipe-book-screen.component';
import { IonicModule } from '@ionic/angular';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    NutrientTableCompactComponent,
    RecipeCreatorComponent,
    IngredientSearchComponent,
    IngredientFormComponent,
    IngredientFilterPipe,
    RecipeBookScreenComponent,
    NavigationBarComponent,
    HomeComponent,
    LoginMenuComponent,
    CreateMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(),
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    IonicModule,
    MatToolbarModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
