
import { createReducer} from '@ngrx/store';

export interface IUserListState {
  readonly users: any[] | null;
}

export const initialUserListState: IUserListState = {
  users: null
}

export const userListReducer = createReducer(
  initialUserListState,
);


export interface IUserDetailState {
  readonly user: {} | null;
}

export const initialUserDetailState: IUserDetailState = {
  user: null
}

export const userDetailReducer = createReducer(
  initialUserDetailState,
);
