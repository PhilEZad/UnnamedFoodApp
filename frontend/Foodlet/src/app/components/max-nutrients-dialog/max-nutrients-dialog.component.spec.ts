import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxNutrientsDialogComponent } from './max-nutrients-dialog.component';

describe('MaxNutrientsDialogComponent', () => {
  let component: MaxNutrientsDialogComponent;
  let fixture: ComponentFixture<MaxNutrientsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxNutrientsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxNutrientsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
