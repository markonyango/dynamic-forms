import {
  GenericFormActionTypes,
  Actions,
} from './generic-form.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface GenericForm {
  id: string | number;
  value: any;
  valid?: boolean;
  dirty?: boolean;
  disabled?: boolean;
  pristine?: boolean;
  errors?: {};
}

const INITIAL_STATE: GenericForm = {
    id: null,
    value: null,
    valid: false,
    dirty: false,
    disabled: false,
    pristine: true,
    errors: {}
};

export function reducer(
  state: GenericForm = INITIAL_STATE,
  action: Actions
): GenericForm {
  switch (action.type) {
    case GenericFormActionTypes.UPDATE_VALUE: {
      return state;
    }
    case GenericFormActionTypes.ADD_ONE: {
      return {
          ...state,
          [action['id']]: action['form']
      };
    }
    default: {
      return state;
    }
  }
}



