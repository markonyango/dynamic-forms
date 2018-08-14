import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { MatSelect, MatCheckbox } from '@angular/material';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {
    this.group.get(this.config.name).setValue(this.config.checked);
  }

  ngAfterViewInit() {}

  config;
  group: FormGroup;
}
