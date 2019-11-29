import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptProductsComponent } from './accept-products.component';

describe('AcceptProductsComponent', () => {
  let component: AcceptProductsComponent;
  let fixture: ComponentFixture<AcceptProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
