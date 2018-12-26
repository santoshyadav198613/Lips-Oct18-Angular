import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidaton]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailvalidatonDirective, multi: true}]
})
export class EmailvalidatonDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'test@email.com') {
      return { validUser: false }
    }
    return null;
  }

}
