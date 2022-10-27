import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLIFrameElement>;

  users$ = this.userService.users$;

  loadUsers = this.userService.loadUsers;
  constructor(public userService: UserService) {
    this.loadUsers();

  }
  ngAfterViewInit(): void {
    console.log(this.searchInput.nativeElement);
    fromEvent(this.searchInput.nativeElement, 'input')
    .pipe(
      map(e => (e.target as HTMLInputElement).value),
      debounceTime(500))
    .subscribe((value)=> this.loadUsers(value));
  }



  searchBtnClickHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);

  }


}
