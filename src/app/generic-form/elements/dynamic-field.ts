import { DynamicFieldConfig } from "./dynamic-field-config";
import { FormGroup } from "@angular/forms";

export interface DynamicField {
  config: DynamicFieldConfig;
  group: FormGroup;
}
