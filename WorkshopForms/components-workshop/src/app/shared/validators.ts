import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if(!control.value) {return null;}
  return /^[A-Za-z0-9\.-]{6,}@gmail\.(bg|com)$/.test(control.value) ? null : {
    invalidEmail: 'Please insert a valid email!'
  }
}
