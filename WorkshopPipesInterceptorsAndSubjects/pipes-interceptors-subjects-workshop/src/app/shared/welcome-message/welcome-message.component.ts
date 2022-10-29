import { Component } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent  {
  icons= {
    faSignInAlt,
    faUserPlus
  }

  get isLogged(): boolean {
   return this.userService.isLogged;
  }
  constructor(private userService: UserService) { }


}
