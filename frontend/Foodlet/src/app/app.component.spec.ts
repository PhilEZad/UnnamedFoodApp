import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { IngredientFilterPipe } from './pipes/ingredient-filter.pipe';
import { RecipeBookScreenComponent } from './screens/recipe-book-screen/recipe-book-screen.component';
import { RecipeCreatorComponent } from './screens/recipe-creator/recipe-creator.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { NutrientTableCompactComponent } from './components/nutrient-table-compact/nutrient-table-compact.component';
import { HomeComponent } from './screens/home/home.component';

describe('AppComponent', () => {
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
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
