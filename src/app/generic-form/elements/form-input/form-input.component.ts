import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { DynamicFieldConfig } from '../dynamic-field-config';
import { DynamicField } from '../dynamic-field';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements DynamicField {
  public config: DynamicFieldConfig;
  public group: FormGroup | FormArray;

  public isFormArray(group) {
    return this.config.formType === 'FormArray';
  }
}
