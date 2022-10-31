import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
import { IPost } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="workshop";

  posts: IPost[] | undefined;

  get isAuthenticating(): boolean{
    return this.userService.user === undefined;
  }

  constructor(
    private userService: UserService,

    ) {
      this.userService.getProfileInfo().subscribe({
        // error: ()=> {
        //   this.userService.user = null;
        // }
        error: (error)=> {
          this.userService.user = null;
          throw error;
        }
      })
  }
}
