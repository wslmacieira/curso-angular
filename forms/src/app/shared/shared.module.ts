import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent
  ],
  exports: [FormDebugComponent]
})
export class SharedModule { }
