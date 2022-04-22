import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorproductComponent } from './interiorproduct.component';

describe('InteriorproductComponent', () => {
  let component: InteriorproductComponent;
  let fixture: ComponentFixture<InteriorproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
