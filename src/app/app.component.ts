import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DynamicFieldConfig } from './generic-form/elements/dynamic-field-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ngrx-forms';

  public config: DynamicFieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
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
    this.config.push({
      type: 'input',
      name: 'added',
      placeholder: 'Added'
    })
  }
}
