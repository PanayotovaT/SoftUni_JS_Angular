import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '' ;
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
