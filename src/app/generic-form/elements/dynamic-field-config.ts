import { ValidatorFn } from '@angular/forms';

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
}
