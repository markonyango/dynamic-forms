import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  public formState: any;

  @ViewChild('form')
  public form;

  public config: any = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [
        Validators.compose([Validators.required, Validators.maxLength(5), Validators.email])
      ]
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      multiple: true,
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      type: 'checkbox',
      label: 'Aktiv',
      name: 'active',
      checked: false
    }
  ];

  public constructor(public store: Store<any>) {
    this.formState = this.store.select('genericForm');
   }

  public addControl() {
    this.config = [
      ...this.config,
      {
        type: 'input',
        name: 'added',
        placeholder: 'Added',
        formType: 'FormArray',
        label: 'Nummern',
        value: [1, 2, 3]
      }
    ];
  }

  public ngAfterViewInit() {}

  public ngOnInit() {}
}
