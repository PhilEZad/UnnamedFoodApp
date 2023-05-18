import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookScreenComponent } from './recipe-book-screen.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RecipeCardComponent } from 'src/app/components/recipe-card/recipe-card.component';
import { RecipeCreatorComponent } from '../recipe-creator/recipe-creator.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { NutrientTableCompactComponent } from 'src/app/components/nutrient-table-compact/nutrient-table-compact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { IngredientFormComponent } from 'src/app/components/ingredient-form/ingredient-form.component';
import { IngredientSearchComponent } from 'src/app/components/ingredient-search/ingredient-search.component';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';
import { IngredientFilterPipe } from 'src/app/pipes/ingredient-filter.pipe';
import { HomeComponent } from '../home/home.component';

describe('RecipeBookScreenComponent', () => {
  let component: RecipeBookScreenComponent;
  let fixture: ComponentFixture<RecipeBookScreenComponent>;

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

    fixture = TestBed.createComponent(RecipeBookScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
