import { GenericFormActionTypes, Actions } from './generic-form.actions';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

export interface GenericForm {
  [formID: string]: GenericFormState;
}

export interface GenericFormState {
  id: string | number;
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  value: any;
  errors: {};
}

const INITIAL_STATE: GenericForm = {};

export function reducer(state: GenericForm = INITIAL_STATE, action: Actions): GenericForm {
  switch (action.type) {
    case GenericFormActionTypes.UPDATE_VALUE: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: action['changes'],
          loading: false,
          loaded: false,
          failed: false,
          errors: {}
        }
      };
    }
    case GenericFormActionTypes.ADD_ONE: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: action['form'],
          loading: false,
          loaded: false,
          failed: false,
          errors: {}
        }
      };
    }
    case GenericFormActionTypes.REMOVE_ONE: {
      const newState = state;
      delete newState[action.id];
      return newState;
    }
    default: {
      return state;
    }
  }
}

export const getAllForms: MemoizedSelector<any, GenericFormState> =
  createFeatureSelector<GenericFormState>('genericForm');

export const getFormByID = (id: string | number): MemoizedSelector<GenericFormState, string | number> =>
  createSelector(getAllForms, forms => forms[id]);
