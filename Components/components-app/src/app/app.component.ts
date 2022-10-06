import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'components-app';
  welcomeMessage="Hello Alexander!";

  isVisible = false;


  constructor(){

  }
  
  toggleHandler() {
    this.isVisible = !this.isVisible;
  }
}
