import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOrLoginComponent } from './signup-or-login.component';

describe('SignupOrLoginComponent', () => {
  let component: SignupOrLoginComponent;
  let fixture: ComponentFixture<SignupOrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupOrLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupOrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
