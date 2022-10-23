import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser} from '../../shared/interfaces/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  inUpdateMode = false;

  get user(){
    return this.userService.user;
  }

  constructor(
    private userService: UserService) { }

   updateProfileForm(form: NgForm): void{
     if(form.invalid){ return; }
     this.userService.updateProfile(form.value).subscribe({
       next: ()=> {
         this.inUpdateMode = false;
       },
       error: (err)=> { console.log(err);}
     })
   }
}
