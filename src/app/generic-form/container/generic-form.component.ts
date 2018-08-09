import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent implements OnInit {
  @Input() config: any[] = [];

  form: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this._fb.group({});
    this.config.forEach(control => group.addControl(control.name, this._fb.control(null)));
    return group;
  }
}
