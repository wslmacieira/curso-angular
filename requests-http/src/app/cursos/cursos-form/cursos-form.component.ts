import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(250)]]
    });
  }

  hasError(campo: string): any {
    return this.form.get(campo)?.errors;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form.value);
  }

  onCancel(): void {
    this.submitted = false;
    this.form.reset();
    // console.log('cancel');
  }

}
