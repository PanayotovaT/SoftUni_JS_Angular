import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="pipes-interceptors-subjects-workshop";

  get isAuthenticating(): boolean{
    return this.userService.user === undefined;
  }

  constructor(
    private userService: UserService
    ) {
      this.userService.getProfileInfo().subscribe({
        error: (error)=> {
          this.userService.user = null;
          throw error;
        }
      })
  }
}
