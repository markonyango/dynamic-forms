import { Component, ChangeDetectionStrategy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DynamicFieldConfig } from './generic-form/elements/dynamic-field-config';
import { Validators } from '@angular/forms';
import { GenericFormComponent } from './generic-form/container/generic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('form') public form: GenericFormComponent;

  public config: DynamicFieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.compose([Validators.required, Validators.maxLength(5), Validators.email])]
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      multiple: true,
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      type: 'checkbox',
      label: 'Aktiv',
      name: 'active',
      checked: false,
    },
  ];

  public addControl() {
    this.config = [
      ...this.config,
      {
        type: 'input',
        name: 'added',
        placeholder: 'Added',
        formType: 'FormArray',
        label: 'Nummern',
        value: [1, 2, 3],
    }];
  }

  public ngAfterViewInit() { }

  public ngOnInit() { }
}
