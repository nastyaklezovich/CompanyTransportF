import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMapsComponent } from './view-maps.component';

describe('ViewMapsComponent', () => {
  let component: ViewMapsComponent;
  let fixture: ComponentFixture<ViewMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
