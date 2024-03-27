import { Pipe, PipeTransform } from '@angular/core';
import {
  SignUpLoginData,
  SignUpLoginDetails,
} from '../../signUpLoginData.token';

@Pipe({
  name: 'signuploginData',
})
export class SignuploginDataPipe implements PipeTransform {
  transform(
    url: keyof SignUpLoginData,
    signUpLoginData: SignUpLoginData,
    key: keyof SignUpLoginDetails
  ): string {
    return signUpLoginData[url][key];
  }
}
