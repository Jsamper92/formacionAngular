import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionGithubComponent } from './peticion-github.component';

describe('PeticionGithubComponent', () => {
  let component: PeticionGithubComponent;
  let fixture: ComponentFixture<PeticionGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
