import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Injectable} from "@angular/core";
import {patterns} from "./patterns";
import {optionsConf} from "./dynamic-form.model";


@Injectable()
export class CustomValidatorsService {

  constructor() {
  }

  public confirm(control: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors => {
      const fgValue1 = c.root.value[control];
      const fgValue2 = c.value;
      if (fgValue1 != fgValue2) {
        return {confirm: true};
      }
      return null;
    };
  }

  public number(control: FormControl): ValidationErrors {
    if (!(patterns.number.test(control.value))) {
      return {number: true};
    }
    return null;
  }

  public password(control: FormControl): ValidationErrors {
    if (!(patterns.number.test(control.value) && patterns.char.test(control.value))) {
      return {password: true};
    }
    return null;
  }

  public email(control: FormControl): ValidationErrors {
    if (control.value == null) {
      return null;
    }
    if (!patterns.email.test(control.value)) {
      return {email: true};
    }
    return null;
  }

  public existValue(options: optionsConf[]): ValidatorFn {
    return (c: AbstractControl): ValidationErrors => {
      if (options.length) return null;
      for (let option of options) {
        if (c.value === option.value) return null;
      }
      return {existValue: true};
    };
  }
}
