import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSignupComponent } from './create-signup.component';

describe('CreateSignupComponent', () => {
  let component: CreateSignupComponent;
  let fixture: ComponentFixture<CreateSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
