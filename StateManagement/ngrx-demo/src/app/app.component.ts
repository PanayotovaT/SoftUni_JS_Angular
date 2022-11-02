import { Component, OnDestroy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, merge, of, Subject, Subscription, takeUntil } from 'rxjs';
import { clearAppState, incrementCounter, loadUsers, loadUsersFailure, loadUsersSuccess, setValue } from './+store/actions';
import { selectGlobalCounter, selectGlobalUsers, selectGlobalValue } from './+store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{

  counter$ = this.store.select(selectGlobalCounter);
  value$ = this.store.select(selectGlobalValue);
  users$ = this.store.select(selectGlobalUsers);

  subscription =  new Subscription();
  killSubscriptions = new Subject();

  isLoadingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsers), map(()=>true)),
    this.actions$.pipe(ofType(loadUsersSuccess), map(()=> false)),
    this.actions$.pipe(ofType(loadUsersFailure), map(()=> false)),
    of(false)
    )

  constructor(
    private store: Store<any>,
    private actions$: Actions
  ) {
    this.subscription.add(
      this.users$
      // .pipe(takeUntil(this.killSubscriptions))
      .subscribe((users)=> console.log(users))
    );
    this.subscription.add(
      this.counter$
      // .pipe(takeUntil(this.killSubscriptions))
      .subscribe((counter)=> console.log(counter))
    );

  }

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // this.killSubscriptions.next(this.subscription);
    // this.killSubscriptions.complete();

  }
 }
