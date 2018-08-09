import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './container/generic-form.component';
import { FormInputComponent } from './elements/form-input/form-input.component';
import { FormSelectComponent } from './elements/form-select/form-select.component';
import { DynamicFieldDirective } from './elements/dynamic-field.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    DynamicFieldDirective,
    GenericFormComponent,
    FormInputComponent,
    FormSelectComponent,
  ],
  exports: [GenericFormComponent],
  entryComponents: [FormInputComponent, FormSelectComponent],
})
export class GenericFormModule {}
