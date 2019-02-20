import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubServeComponent } from './github-serve.component';

describe('GithubServeComponent', () => {
  let component: GithubServeComponent;
  let fixture: ComponentFixture<GithubServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
