
import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, setValue } from './actions';
import { incrementCounter } from './actions';

export interface IGlobalState {
  readonly counter: number;
  readonly value: any;
  readonly users: any[] | null;
}

export const initialState: IGlobalState = {
  counter: 0,
  value: null,
  users: null
}

export const globalReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
  on(setValue, (state, { value }) => ({ ...state, value })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);
