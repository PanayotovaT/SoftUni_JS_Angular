import { Component, OnInit, } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';



// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// const p = new Promise((resolve, reject) => {
//   setTimeout(()=> resolve(3000), 3000);
// });

// p.then((value) => console.log(value));

// Promise.resolve(1000).then(x => x + 1).then(x => console.log(x));
//--------------------------------
// const movie = of(1000, 200, 3000)

//cold observable
// movie.pipe(
//   map(x => x + 100)
// ).subscribe((x) => {
//   console.log(x)
// });

// movie.pipe(
//   map(x => x + 100)
// ).subscribe((x) => {
//   console.log(x)
// });

// movie.pipe(
//   map(x => x + 100)
// ).subscribe((x) => {
//   console.log(x)
// });

//hot observable - shared one

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
// export class AppComponent {
//   constructor(public userService: UserService) {

//   }
export class AppComponent  implements OnInit{
  users: IUser[] | undefined;
  constructor(public userService: UserService) {

  }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(search?: string) {
    this.users = undefined;
    this.userService.loadUsers(search).subscribe(users => this.users = users )
  }

  reloadBtnHandler() {
    this.loadUsers();
  }

  searchBtnClickHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);

  }


}
