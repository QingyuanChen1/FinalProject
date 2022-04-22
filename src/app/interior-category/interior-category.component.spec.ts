import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorCategoryComponent } from './interior-category.component';

describe('InteriorCategoryComponent', () => {
  let component: InteriorCategoryComponent;
  let fixture: ComponentFixture<InteriorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
