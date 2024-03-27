import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';



@NgModule({
  declarations: [
    EmailComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailComponent,
    PasswordComponent
  ]
})
export class SigninLoginModule { }
