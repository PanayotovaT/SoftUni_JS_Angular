import { AbstractControl} from "@angular/forms";

export function sameValueValidate(
 control: AbstractControl,
 controlName: string,
 otherControl: AbstractControl,
 otherControlName: string
) {

  return control.value !== otherControl?.value
    ? {
      sameValue: {
        [otherControlName]: otherControl?.value,
        [controlName] : control.value
        }

      }

    : null

}
