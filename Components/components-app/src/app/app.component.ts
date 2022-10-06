import { Component, ViewEncapsulation } from '@angular/core';

const users = [
  {
    firstName: 'First Name 1',
    lastName: 'Last Name 1',
    age: 34
  },
  {
    firstName: 'First Name 2',
    lastName: 'Last Name 2',
    age: 35
  },
  {
    firstName: 'First Name 3',
    lastName: 'Last Name 3',
    age: 35
  }
]


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'components-app';
  welcomeMessage="Hello Alexander!";
  nameInputValue= 'Hello!';

  isVisible = false;

  users = users;


  constructor(){
    
  }

  toggleHandler() {
    this.isVisible = !this.isVisible;

  }

  nameInputBtnClickHandler(data: {inputEl: HTMLInputElement}) : void{
      console.log(data.inputEl.value)
  }

}
