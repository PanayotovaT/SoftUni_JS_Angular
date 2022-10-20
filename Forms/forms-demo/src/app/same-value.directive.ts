import { Directive, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NgControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { sameValueValidateFactory } from './same-valu-validate-fn';
@Directive({
  selector: '[appSameValue]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SameValueDirective,
    multi: true
  }]
})
export class SameValueDirective  implements Validator, OnDestroy {

  @Input() appSameValue = "";
  @Input() name!: string;
  otherControl!: AbstractControl;
  subscription!: Subscription;
  // currentControl!: AbstractControl

  constructor(
    private form: NgForm,
    ) {
    console.log(form);
  }
  // ngOnChanges(simpleChanges: SimpleChanges): void {
  //   if(simpleChanges['appSameValue']){
  //     if(this.subscription) {
  //       this.subscription.unsubscribe()
  //     }
  //     this.otherField = this.form.controls[this.appSameValue];
  //     this.subscription = this.control.valueChanges!.subscribe(()=> {
  //       // this.ngModel.control.updateValueAndValidity({onlySelf: true});
  //     })
  //   }
  // }
  validate(control: AbstractControl): ValidationErrors | null {
    const otherControl = this.form.controls[this.appSameValue];
    // const otherControlValue = otherControl.value;

    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription =otherControl.valueChanges!.subscribe(()=> {
        control.updateValueAndValidity({onlySelf: true})
    })

    return sameValueValidateFactory(this.name, this.appSameValue, otherControl,)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
