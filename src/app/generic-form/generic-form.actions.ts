import { Action } from '@ngrx/store';
import { GenericForm } from './generic-form.reducer';


// Action Types
export enum GenericFormActionTypes {
    ADD_ONE = '[Generic Form] Add One',
    UPDATE_VALUE = '[Generic Form] Update Form Value',
}

export class AddOne implements Action {
  public readonly type = GenericFormActionTypes.ADD_ONE;
  public constructor(public id: string | number, public form: GenericForm) {}
}

export class UpdateValueAction implements Action {
  public type = GenericFormActionTypes.UPDATE_VALUE;
  public constructor(public id: string | number, public changes: Partial<GenericForm>) {}
}

export type Actions = AddOne | UpdateValueAction;

