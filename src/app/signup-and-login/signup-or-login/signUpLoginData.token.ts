import { InjectionToken } from '@angular/core';

export type SignUpLoginDetails = {
  heading: string;
  headingDescription: string;
  buttonText: string;
  accountState1: string;
  accountState2: string;
};
export type SignUpLoginData = {
  signup: SignUpLoginDetails;
  login: SignUpLoginDetails;
};

export const signUpLoginData: SignUpLoginData = {
  signup: {
    heading: 'Create Account',
    headingDescription: 'Let’s get you started sharing your links!',
    buttonText: 'Create new account',
    accountState1: 'Already have an account?',
    accountState2: 'Login',
  },
  login: {
    heading: 'Login',
    headingDescription: 'Add your details below to get back in the app',
    buttonText: 'Login',
    accountState1: `Don't have an account?`,
    accountState2: 'Create account',
  },
};

export const SIGNUP_LOGIN_DATA = new InjectionToken<SignUpLoginData>(
  'SignUpLoginData'
);

// export const signUpLoginInjector = Injector.create({
//   providers: [{ provide: SIGNUP_LOGIN_DATA, useValue: signUpLoginData }],
// });
