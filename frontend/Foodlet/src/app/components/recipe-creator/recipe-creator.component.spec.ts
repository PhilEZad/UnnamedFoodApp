import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreatorComponent } from './recipe-creator.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { IngredientFormComponent } from 'src/app/components/ingredient-form/ingredient-form.component';
import { IngredientSearchComponent } from 'src/app/components/ingredient-search/ingredient-search.component';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';
import { NutrientTableCompactComponent } from 'src/app/components/nutrient-table-compact/nutrient-table-compact.component';
import { RecipeCardComponent } from 'src/app/components/recipe-card/recipe-card.component';
import { IngredientFilterPipe } from 'src/app/pipes/ingredient-filter.pipe';
import { HomeComponent } from '../home/home.component';
import { RecipeBookScreenComponent } from '../recipe-book-screen/recipe-book-screen.component';

describe('RecipeCreatorComponent', () => {
  let component: RecipeCreatorComponent;
  let fixture: ComponentFixture<RecipeCreatorComponent>;

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
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
