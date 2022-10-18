import { Directive, Input } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSameValue]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SameValueDirective,
    multi: true
  }]
})
export class SameValueDirective implements Validator {

  @Input() appSameValue = "";
  @Input() name!: string;

  constructor(private form: NgForm) {
    console.log(form);
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const otherField = this.form.controls[this.appSameValue].value;

    return control.value !== otherField
      ? {
        sameValue: {
          [this.appSameValue]: otherField,
          [this.name]: control.value
         }
      }
      : null
  }

}
