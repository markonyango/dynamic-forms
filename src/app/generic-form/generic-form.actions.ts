import { Action } from '@ngrx/store';
import { GenericForm } from './generic-form.reducer';


// Action Types
export enum GenericFormActionTypes {
    ADD_ONE = '[Generic Form] Add One',
    REMOVE_ONE = '[Generic Form] Remove One',
    UPDATE_VALUE = '[Generic Form] Update Form Value',
}

export class AddOne implements Action {
  public readonly type = GenericFormActionTypes.ADD_ONE;
  public constructor(public id: string | number, public form: GenericForm) {}
}

export class RemoveOne implements Action {
  public readonly type = GenericFormActionTypes.REMOVE_ONE;
  public constructor(public id: string | number) {}
}

export class UpdateValue implements Action {
  public type = GenericFormActionTypes.UPDATE_VALUE;
  public constructor(public id: string | number, public changes: Partial<GenericForm>) {}
}

export type Actions = AddOne | RemoveOne | UpdateValue;

