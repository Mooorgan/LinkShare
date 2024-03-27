import { Component, Input, ViewContainerRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'linkshare-email',
  templateUrl: './email.component.html',
  styleUrls: [
    '../../../signup-and-login/signup-and-login.component.scss',
    './email.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi: true,
    },
  ],
})
export class EmailComponent implements ControlValueAccessor {
  @Input() label = `Email address`;
  protected value!: string;
  protected disabled!: boolean;
  /*eslint-disable @typescript-eslint/no-empty-function */
  private onChange: (value: string) => void = () => {};
  private onTouch: (value: string) => void = () => {};
  /*eslint-enable @typescript-eslint/no-empty-function */

  writeValue(obj: string): void {
    this.value = obj;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /* eslint-enable @typescript-eslint/no-explicit-any */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
