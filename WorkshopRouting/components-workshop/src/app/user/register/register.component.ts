import { Component } from '@angular/core';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  icons = {
    faUser,
    faEnvelope,
    faPhone,
    faLock
  }

  constructor(private userService: UserService) { }

  register(): void {

  }
}
