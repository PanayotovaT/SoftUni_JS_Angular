import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser} from '../../shared/interfaces/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: IUser |null| undefined;


  constructor(private userService: UserService) {
    this.user = this.userService.user;
   }

}
