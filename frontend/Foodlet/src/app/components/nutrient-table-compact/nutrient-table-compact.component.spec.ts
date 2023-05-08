import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientTableCompactComponent } from './nutrient-table-compact.component';

describe('NutrientTableCompactComponent', () => {
  let component: NutrientTableCompactComponent;
  let fixture: ComponentFixture<NutrientTableCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientTableCompactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientTableCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
