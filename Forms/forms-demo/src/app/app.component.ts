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

  isActive = false;

  isActiveHandler(data: any): void {
    console.log(data);
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

}
