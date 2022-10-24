import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
// export class AppComponent {
//   constructor(public userService: UserService) {

//   }
export class AppComponent{

  data= [{test:43}, {test: 9999}, {test: 2}, {test: 3}];

  addItem() {
    this.data.push({test: 4});
  }
  //------------------------------
  // isActive = false;

  // isActiveHandler(data: any): void {
  //   console.log(data);
  // }

  // toggleActive(): void {
  //   this.isActive = !this.isActive;
  // }

}
