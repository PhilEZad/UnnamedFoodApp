import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanScreenComponent } from './meal-plan-screen.component';

describe('MealPlanScreenComponent', () => {
  let component: MealPlanScreenComponent;
  let fixture: ComponentFixture<MealPlanScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPlanScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
