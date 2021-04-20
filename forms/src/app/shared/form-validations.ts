import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static requiredMinCheckbox(min = 1): any {
    const validator = (formArray: FormArray) => {
      /* const values = formArray.controls;
      let totalchecked = 0;
      for (let i = 0; i < values.length; i++) {
        if (values[i].value) {
          totalchecked += 1;
        }
      } */
      const totalchecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalchecked >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {

    const cep = control.value;

    if (cep && cep !== '') {
      const validaCep = /^[0-9]{8}$/;
      return validaCep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('E´necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (field == null) {
        throw new Error('E´necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };
    return validator;
  }
}
