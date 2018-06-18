/*
class CustomValidators {
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

  private sameField(control1, control2): ValidatorFn {
    return (c: FormGroup): ValidationErrors | null => {
      const fgValue = c.value;
      if (fgValue[control1] != fgValue[control2]) {
        return {same: `${control1} != ${control2}`};
      }
      return null;
    };
  }

  private passwordValidator(control: FormControl): ValidationErrors {
    const hasNumber = /[0-9]/.test(control.value);
    const hasLetters = /[A-z]/.test(control.value);
    const passwordValid = hasNumber && hasLetters;
    if (!passwordValid) {
      return {invalidPassword: true};
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
*/
