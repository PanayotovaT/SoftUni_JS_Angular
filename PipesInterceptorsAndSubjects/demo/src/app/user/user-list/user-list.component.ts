import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../../interfaces/user';
import { mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit{
  users: IUser[] | undefined;
  constructor(public userService: UserService) {
    this.users = undefined;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(search?: string) {
    this.users = undefined;
    this.userService.loadUsers(search).subscribe(users => this.users = users )

    this.userService.loadUsers().pipe(
      switchMap(users =>this.userService.loadUser(users[0].id))
    ).subscribe(loadedUser => { console.log(loadedUser)})
  }



  reloadBtnHandler() {
    this.loadUsers();
  }

  searchBtnClickHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);

  }


}
