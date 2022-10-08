// import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { myStingInjectionToken } from "./app.module";
import { IUser } from "./interfaces/user";

// @Injectable({
//   providedIn: 'root'
// });

// @Injectable(
//   // {
//   //   providedIn: 'root'
//   // }
// )
// export class UserService {
//   users = [
//     {
//       name: 'Alex',
//       age: 4
//     },
//     {
//       name: 'Sofia',
//       age: 3
//     },
//     {
//       name: 'Ivelina',
//       age: 36
//     }
//   ]
//   constructor(@Inject(myStingInjectionToken) myString: string) {
//     console.log(myStingInjectionToken);
//   }


//   addNewUserHandler(newUser: IUser): void {
//     this.users = this.users.concat(newUser);
//   }

// }

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  loadUsers(search: string = ''){
    const query = search ? `?email_like=${search}` : '';
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`)
  }
 }