import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, startWith, Subscription, switchMap, takeUntil } from "rxjs";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if(!control.value) {return null;}
  return /^[A-Za-z0-9\.-]{6,}@gmail\.(bg|com)$/.test(control.value) ? null : {
    invalidEmail: 'Please insert a valid email!'
  }
}

export function sameValueAsFactory(getTargetControl:()=> AbstractControl | null, killSubscription: Observable<any>) {
  let subscription: Subscription | null = null;

  return function (control: AbstractControl) {
    if(subscription){ subscription.unsubscribe(); subscription = null; }
    const targetControl = getTargetControl();
    if(!targetControl) {return null;}

    subscription = targetControl.valueChanges
    .pipe(
      takeUntil(killSubscription)
    ).subscribe({
      next: () => { control.updateValueAndValidity();},
      complete: () => { subscription = null; }
    })
    return targetControl?.value === control?.value ? null : {sameValue: true}
  }
}
