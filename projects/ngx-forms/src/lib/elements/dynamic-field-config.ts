import { ValidatorFn, FormGroup, FormControl, FormArray } from '@angular/forms';

export enum formType {
  formGroup = 'FormGroup',
  formControl = 'FormControl',
  formArray = 'FormArray'
}

export interface DynamicFieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
  multiple?: boolean;
  checked?: boolean;
  formType?: string;
}
