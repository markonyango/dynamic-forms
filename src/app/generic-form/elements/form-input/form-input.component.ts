import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../dynamic-field-config';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  public config: DynamicFieldConfig;
  public group: FormGroup;

  constructor() {}

  public ngOnInit() {}
}
