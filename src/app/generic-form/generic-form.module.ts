import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './container/generic-form.component';
import { FormInputComponent } from './elements/form-input/form-input.component';
import { FormSelectComponent } from './elements/form-select/form-select.component';
import { DynamicFieldDirective } from './elements/dynamic-field.directive';
import { MaterialModule } from '../material/material.module';
import { FormCheckboxComponent } from './elements/form-checkbox/form-checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    DynamicFieldDirective,
    GenericFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
  ],
  exports: [GenericFormComponent],
  entryComponents: [FormInputComponent, FormSelectComponent, FormCheckboxComponent],
})
export class GenericFormModule {}
