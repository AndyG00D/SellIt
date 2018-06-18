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

  // public confirm(control1, control2): ValidatorFn {
  //   return (c: FormControl): ValidationErrors => {
  //     // const fgValue = c.parent.value;
  //     const group = c.parent;
  //     console.log(FormGroup.apply(group, get(control1));
  //     const value = c.value;
  //     console.log(value);
  //     // if (fgValue[control1] != fgValue[control2]) {
  //     //   return {same: `${control1} != ${control2}`};
  //     // }
  //     return null;
  //   };
  // }

  // public confirm(c: FormGroup, control1, control2): ValidationErrors {
  //     const fgValue = c.value;
  //     if (fgValue[control1] != fgValue[control2]) {
  //       return {same: `${control1} != ${control2}`};
  //     }
  //     return null;
  // }

  public number(control: FormControl): ValidationErrors {
    if (!(patterns.number.test(control.value)) ) {
      return {number: true};
    }
    return null;
  }

  public password(control: FormControl): ValidationErrors {
    if (!(patterns.number.test(control.value) && patterns.char.test(control.value)) ) {
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


  private matchValidator(group: FormGroup): ValidationErrors {

    let password1 = group.controls['password1'].value;
    let password2 = group.controls['password2'].value;

    if (password1 === password2) {
      return null;
    }
    return {
      mismatch: true
    };
  }
}
