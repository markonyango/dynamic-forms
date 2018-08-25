import { Directive, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store,  } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { GenericForm } from './generic-form.reducer';
import * as fromFormActions from './generic-form.actions';

@Directive({
  selector: '[connectForm]',
})
export class GenericFormDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('connectForm')
  public id: string;

  public debounce = 300;
  public formChange: any;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<GenericForm>,
  ) {}

  public ngOnInit(): void {
    this.formChange = this.formGroupDirective.form.valueChanges.pipe(
      debounceTime(this.debounce)
    )
    .subscribe(value => {
        this.store.dispatch(new fromFormActions.UpdateValue(this.id, value));
      });
  }
}
