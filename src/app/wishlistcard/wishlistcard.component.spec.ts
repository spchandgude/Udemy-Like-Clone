import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistcardComponent } from './wishlistcard.component';

describe('WishlistcardComponent', () => {
  let component: WishlistcardComponent;
  let fixture: ComponentFixture<WishlistcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
