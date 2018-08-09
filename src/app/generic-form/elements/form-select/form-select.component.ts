import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  config;
  group: FormGroup;
}
