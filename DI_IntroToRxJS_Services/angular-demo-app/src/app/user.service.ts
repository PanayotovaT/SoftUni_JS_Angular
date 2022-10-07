// import { Injectable } from '@angular/core';

import { Inject, Injectable } from "@angular/core";
import { myStingInjectionToken } from "./app.module";
import { IUser } from "./interfaces/user";

// @Injectable({
//   providedIn: 'root'
// });

@Injectable()
export class UserService {
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
  constructor(@Inject(myStingInjectionToken) myString: string) {
    console.log(myStingInjectionToken);
   }


  addNewUserHandler(newUser: IUser): void {
    this.users = this.users.concat(newUser);
  }

}
