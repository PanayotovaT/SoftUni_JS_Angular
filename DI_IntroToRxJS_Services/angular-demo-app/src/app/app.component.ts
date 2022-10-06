import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users = [
    {
      name: 'Alex',
      age: 4
    },
    {
      name: 'Sofia',
      age: 3
    },
    {
      name: 'Ivelina',
      age: 36
    }
  ]

  addNewUserHandler(newUser: IUser): void {
    this.users = this.users.concat(newUser);
  }

}
