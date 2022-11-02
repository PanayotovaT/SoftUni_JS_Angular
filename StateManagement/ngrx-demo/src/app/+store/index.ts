import { ActionReducerMap } from "@ngrx/store";
import { globalReducer, IGlobalState } from "./reducer";

export interface IState {
  readonly gloabl: IGlobalState;
}

export const reducers: ActionReducerMap<IState>= {
  gloabl: globalReducer
}
