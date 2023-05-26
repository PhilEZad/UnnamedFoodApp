import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardCompactComponent } from './recipe-card-compact.component';

describe('RecipeCardCompactComponent', () => {
  let component: RecipeCardCompactComponent;
  let fixture: ComponentFixture<RecipeCardCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardCompactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
