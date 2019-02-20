import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingEjemploComponent } from './routing-ejemplo.component';

describe('RoutingEjemploComponent', () => {
  let component: RoutingEjemploComponent;
  let fixture: ComponentFixture<RoutingEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
