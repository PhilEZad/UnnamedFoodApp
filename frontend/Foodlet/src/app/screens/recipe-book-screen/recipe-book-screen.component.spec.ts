import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookScreenComponent } from './recipe-book-screen.component';

describe('RecipeBookScreenComponent', () => {
  let component: RecipeBookScreenComponent;
  let fixture: ComponentFixture<RecipeBookScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBookScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeBookScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
