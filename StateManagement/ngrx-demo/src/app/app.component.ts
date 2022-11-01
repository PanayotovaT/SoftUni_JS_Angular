import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCounter, setValue } from './+demo_store/actions';
import { getCounter, getValue } from './+demo_store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter$ = this.store.select(getCounter);
  value$ = this.store.select(getValue);

  constructor(private store: Store<any>){}

  incrementCounter(): void{
    this.store.dispatch(incrementCounter())
  }

  setValue(valueInput: HTMLInputElement) {
    this.store.dispatch(setValue(valueInput.value))
    valueInput.value = '';
  }
}
