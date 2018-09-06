import { DynamicFieldConfig } from './dynamic-field-config';
import { FormGroup, FormArray } from '@angular/forms';

export interface DynamicField {
  config: DynamicFieldConfig;
  group: FormGroup | FormArray;
}
