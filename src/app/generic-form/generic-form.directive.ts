import { Directive, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { take, tap, debounceTime, defaultIfEmpty } from 'rxjs/operators';
import { GenericForm } from './generic-form.reducer';
import { GenericFormActionTypes, UpdateValueAction } from './generic-form.actions';

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
    private actions$: Actions,
    private store: Store<GenericForm>
  ) {}

  public ngOnInit(): void {

    this.store.pipe(
      tap(x => console.log(x)),
      select(state => state.value),
      take(1)
    )
      .subscribe(val => {
        this.formGroupDirective.form.patchValue(val);
      });


    this.formChange = this.formGroupDirective.form.valueChanges.pipe(
      debounceTime(this.debounce)
    )
      .subscribe(value => {
        this.store.dispatch(new UpdateValueAction(this.id, value));
      });
  }
}
