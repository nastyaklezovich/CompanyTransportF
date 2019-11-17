import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntermediatePointComponent } from './add-intermediate-point.component';

describe('AddIntermediatePointComponent', () => {
  let component: AddIntermediatePointComponent;
  let fixture: ComponentFixture<AddIntermediatePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIntermediatePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIntermediatePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
