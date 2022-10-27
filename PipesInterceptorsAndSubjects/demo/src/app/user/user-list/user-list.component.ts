import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit{
  users$ = this.userService.users$;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers = this.userService.loadUsers;

  searchBtnClickHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);

  }


}
