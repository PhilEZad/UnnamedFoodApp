import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAccordionComponent } from './ingredient-accordion.component';

describe('IngridientAccordionComponent', () => {
  let component: IngredientAccordionComponent;
  let fixture: ComponentFixture<IngredientAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
