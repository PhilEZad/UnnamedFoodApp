import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardComponent } from './recipe-card.component';
import { MatCardModule } from '@angular/material/card';
import { Input, NgModule } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NutrientTableCompactComponent } from '../nutrient-table-compact/nutrient-table-compact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { IngredientFilterPipe } from 'src/app/pipes/ingredient-filter.pipe';
import { HomeComponent } from 'src/app/screens/home/home.component';
import { RecipeBookScreenComponent } from 'src/app/screens/recipe-book-screen/recipe-book-screen.component';
import { RecipeCreatorComponent } from 'src/app/screens/recipe-creator/recipe-creator.component';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { IngredientSearchComponent } from '../ingredient-search/ingredient-search.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        IonicModule,
        MatToolbarModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
