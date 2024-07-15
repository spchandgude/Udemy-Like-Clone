import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcoursecardComponent } from './cartcoursecard.component';

describe('CartcoursecardComponent', () => {
  let component: CartcoursecardComponent;
  let fixture: ComponentFixture<CartcoursecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartcoursecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartcoursecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
