import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mapTo, merge, of } from 'rxjs';
import { clearAppState, incrementCounter, loadUsers, loadUsersFailure, loadUsersSuccess, setValue } from './+store/actions';
import { selectGlobalCounter, selectGlobalUsers, selectGlobalValue } from './+store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter$ = this.store.select(selectGlobalCounter);
  value$ = this.store.select(selectGlobalValue);
  users$ = this.store.select(selectGlobalUsers);

  isLoadingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsers), map(()=>true)),
    this.actions$.pipe(ofType(loadUsersSuccess), map(()=> false)),
    this.actions$.pipe(ofType(loadUsersFailure), map(()=> false)),
    of(false)
    )

  constructor(
    private store: Store<any>,
    private actions$: Actions
  ) { }

  incrementCounter(): void {
    this.store.dispatch(incrementCounter())
  }

  setValue(valueInput: HTMLInputElement) {
    this.store.dispatch(setValue({ value: valueInput.value }))
    valueInput.value = '';
  }

  laodUsers(): void {
    this.store.dispatch(loadUsers())
  }

  resetState(): void {
    this.store.dispatch(clearAppState());
  }
}
