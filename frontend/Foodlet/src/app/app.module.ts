import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { NutrientTableCompactComponent } from './components/nutrient-table-compact/nutrient-table-compact.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { RecipeCreatorComponent } from './screens/recipe-creator/recipe-creator.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { RecipeBookScreenComponent } from './screens/recipe-book-screen/recipe-book-screen.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    NutrientTableCompactComponent,
    RecipeCreatorComponent,
    RecipeBookScreenComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        IonicModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
