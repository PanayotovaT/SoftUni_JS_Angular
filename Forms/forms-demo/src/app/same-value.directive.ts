import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSameValue]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SameValueDirective,
    multi: true
  }]
})
export class SameValueDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

}
