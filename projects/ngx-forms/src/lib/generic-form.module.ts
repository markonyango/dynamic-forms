import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './container/generic-form.component';
import { FormInputComponent } from './elements/form-input/form-input.component';
import { FormSelectComponent } from './elements/form-select/form-select.component';
import { DynamicFieldDirective } from './elements/dynamic-field.directive';
import { MaterialModule } from './material.module';
import { FormCheckboxComponent } from './elements/form-checkbox/form-checkbox.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './generic-form.reducer';
import { GenericFormDirective } from './generic-form.directive';
import { Actions } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('genericForm', reducer)
  ],
  declarations: [
    DynamicFieldDirective,
    GenericFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    GenericFormDirective
  ],
  providers: [Actions],
  exports: [GenericFormComponent],
  entryComponents: [FormInputComponent, FormSelectComponent, FormCheckboxComponent]
})
export class GenericFormModule {}
