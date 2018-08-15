import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicFieldConfig } from '../dynamic-field-config';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCheckboxComponent implements OnInit {
  public config: DynamicFieldConfig;
  public group: FormGroup;

  public constructor() {}

  public ngOnInit() {
    this.group.get(this.config.name).setValue(this.config.checked);
  }
}
