import {
  Component,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SubjectDestroyService } from 'src/app/services/subject-destroy.service';
import {
  SIGNUP_LOGIN_DATA,
  SignUpLoginData,
  signUpLoginData,
} from './signUpLoginData.token';

@Component({
  selector: 'linkshare-signup-or-login',
  templateUrl: './signup-or-login.component.html',
  styleUrls: ['../signup-and-login.component.scss'],
  providers: [
    SubjectDestroyService,
    {
      provide: SIGNUP_LOGIN_DATA,
      useValue: signUpLoginData,
    },
  ],
})
export class SignupOrLoginComponent implements OnChanges {
  @Input()
  url!: keyof SignUpLoginData;
  signUpLoginData = this.injector.get(SIGNUP_LOGIN_DATA, undefined, {
    self: true,
  });

  // signUpLoginData = signUpLoginInjector.get(SIGNUP_LOGIN_DATA, undefined, {
  //   self: true,
  // });

  constructor(private injector: Injector) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.url = changes['url'].currentValue;
  }
}
