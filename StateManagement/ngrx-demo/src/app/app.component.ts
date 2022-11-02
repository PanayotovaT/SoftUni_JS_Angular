import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, setValue } from './+store/actions';
import { selectGlobalCounter, selectGlobalValue } from './+store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter$ = this.store.select(selectGlobalCounter);
  value$ = this.store.select(selectGlobalValue);

  constructor(private store: Store<any>){}

  incrementCounter(): void{
    this.store.dispatch(increment())
  }

  setValue(valueInput: HTMLInputElement) {
    this.store.dispatch(setValue({value: valueInput.value}))
    valueInput.value = '';
  }
}
