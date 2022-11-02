import { IState } from ".";
import { createSelector} from '@ngrx/store';

export const selectGlobal = (state: IState) => state.gloabl

export const selectGlobalCounter = createSelector(
  selectGlobal,
  state=>state.counter
);

export const selectGlobalValue = createSelector(
  selectGlobal,
  state => state.value
)
