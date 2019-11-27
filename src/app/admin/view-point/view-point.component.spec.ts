import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPointComponent } from './view-point.component';

describe('ViewPointComponent', () => {
  let component: ViewPointComponent;
  let fixture: ComponentFixture<ViewPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
