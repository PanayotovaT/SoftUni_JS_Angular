import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent {
  users: IUser[] | undefined;
  constructor(public userService: UserService) {
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
