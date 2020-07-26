import {ValidatorFn, AbstractControl} from '@angular/forms';

export function validRegExp(type: string, ex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let val = control.value;
    console.log(val);
    let res = {};
    res[type] = {val};
    return ex.test(val) ? null : res;
  };
}
