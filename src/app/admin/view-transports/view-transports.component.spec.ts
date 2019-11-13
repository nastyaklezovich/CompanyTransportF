import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransportsComponent } from './view-transports.component';

describe('ViewTransportsComponent', () => {
  let component: ViewTransportsComponent;
  let fixture: ComponentFixture<ViewTransportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
