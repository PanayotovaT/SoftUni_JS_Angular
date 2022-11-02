import { createSelector, createFeatureSelector} from '@ngrx/store';
import { IUserState } from '.';


const UserModuleSelector = createFeatureSelector<IUserState>('user');

const selectUserList = createSelector(
  UserModuleSelector,
  state=> state.list
)

const selectUserDetail= createSelector(
  UserModuleSelector,
  state=> state.detail
)

export const selectUserListUsers = createSelector(
  selectUserList, s=> s.users
)
export const selectUserDetails = createSelector(
  selectUserDetail, s=> s.user
)
