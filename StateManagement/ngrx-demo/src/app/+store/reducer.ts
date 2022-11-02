
import { createReducer, on} from '@ngrx/store';
import { setValue } from './actions';
import { increment } from './actions';

export interface IGlobalState {
  readonly counter: number;
  readonly value: any
}

export const initialState: IGlobalState = {
  counter: 0,
  value: null
}

export const globalReducer = createReducer(
  initialState,
  on(increment, (state)=> ({...state, counter: state.counter + 1})),
  on(setValue, (state, { value }) => ({...state, value }))

)
