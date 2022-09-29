import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }
    const length = value.length >= 8;

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasEspecial = /[\=\)\(\^#\;,$!-._\*\+]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && (hasNumeric || hasEspecial) && length;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}
