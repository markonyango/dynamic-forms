import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../dynamic-field-config';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  public config: DynamicFieldConfig;
  public group: FormGroup;

  public constructor() {}

  public ngOnInit() {}
}
