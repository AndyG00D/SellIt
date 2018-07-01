import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Injectable} from "@angular/core";
import {patterns} from "./patterns";
import {optionsConf} from "./dynamic-form.model";

/**
 * Service of custom Form validators
 */
@Injectable()
export class CustomValidatorsService {

  constructor() {
  }

  /**
   * Confirm equal values of same control and control in @param
   * @param {string} control - name of form control
   * @returns {ValidatorFn}
   */
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

  /**
   * Validate value control by patten number
   * @param {FormControl} control
   * @returns {ValidationErrors}
   */
  public number(control: FormControl): ValidationErrors {
    if (!(patterns.number.test(control.value))) {
      return {number: true};
    }
    return null;
  }

  /**
   * Validate value control by patten number and char
   * @param {FormControl} control
   * @returns {ValidationErrors}
   */
  public password(control: FormControl): ValidationErrors {
    if (!(patterns.number.test(control.value) && patterns.char.test(control.value))) {
      return {password: true};
    }
    return null;
  }

  /**
   * Validate value control by patten email
   * @param {FormControl} control
   * @returns {ValidationErrors}
   */
  public email(control: FormControl): ValidationErrors {
    if (control.value == null) {
      return null;
    }
    if (!patterns.email.test(control.value)) {
      return {email: true};
    }
    return null;
  }

  /**
   * Check value of form control equal on of options in conf
   * @param {optionsConf[]} options - options in conf for select
   * @returns {ValidatorFn}
   */
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
