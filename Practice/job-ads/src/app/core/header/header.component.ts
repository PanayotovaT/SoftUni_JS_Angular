import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get email(): string {
    return this.userService.user?.email || ''
  }

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
