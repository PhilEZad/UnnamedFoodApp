import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientService } from 'src/services/ingredient.service';
import { IngredientFormComponent } from './ingredient-form.component';
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
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { IngredientFilterPipe } from 'src/app/pipes/ingredient-filter.pipe';
import { HomeComponent } from 'src/app/screens/home/home.component';
import { RecipeBookScreenComponent } from 'src/app/screens/recipe-book-screen/recipe-book-screen.component';
import { RecipeCreatorComponent } from 'src/app/screens/recipe-creator/recipe-creator.component';
import { IngredientSearchComponent } from '../ingredient-search/ingredient-search.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { NutrientTableCompactComponent } from '../nutrient-table-compact/nutrient-table-compact.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

describe('IngredientFormComponent', () => {
  let component: IngredientFormComponent;
  let fixture: ComponentFixture<IngredientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IngredientSearchComponent,
        IngredientFormComponent,
        IngredientFilterPipe,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
      ],
      providers: [IngredientService, IngredientFilterPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
