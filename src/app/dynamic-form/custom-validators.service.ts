import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Injectable} from "@angular/core";
import {patterns} from "./patterns";
import {Subscription} from "rxjs/Subscription";
import {optionsConf} from "./dynamic-form.model";


@Injectable()
export class CustomValidatorsService {
  // private numberPattern: RegExp =  /[0-9]/;
  // charPattern: RegExp =  /[A-z]/;
  // emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor() {

  }

  public dependedRequired(control: string, validatorsList = []): ValidatorFn {
    return (c: AbstractControl): ValidationErrors => {
      const group = c.parent;
      const value = c.value;
      if (value) {
        group
          .get(control)
          .setValidators([Validators.required, ...validatorsList]);
        group.get(control).updateValueAndValidity();
      }
      if (!value && c.dirty) {
        group.get(control).setValidators([...validatorsList]);
        group.get(control).updateValueAndValidity();
      }
      return null;
    };
  }

  public confirm(control: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors => {
      // let control2 = c.parent.get(control);
      // let cont: Subscription = control2.valueChanges.subscribe( () => {
      //   c.updateValueAndValidity();
      //   cont.unsubscribe();
      // });
      const fgValue1 = c.root.value[control];
      const fgValue2 = c.value;
      if (fgValue1 != fgValue2) {
        return {confirm: true};
      }
      return null;
    };
  }

  // public confirm(c: FormGroup, control1, control2): ValidationErrors {
  //     const fgValue = c.value;
  //     if (fgValue[control1] != fgValue[control2]) {
  //       return {same: `${control1} != ${control2}`};
  //     }
  //     return null;
  // }

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
