import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubResultsDetailsComponent } from './github-results-details.component';

describe('GithubResultsDetailsComponent', () => {
  let component: GithubResultsDetailsComponent;
  let fixture: ComponentFixture<GithubResultsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubResultsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubResultsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
