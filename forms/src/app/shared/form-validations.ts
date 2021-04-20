import { FormArray } from '@angular/forms';

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
}
