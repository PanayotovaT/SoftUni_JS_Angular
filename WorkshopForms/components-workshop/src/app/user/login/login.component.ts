import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { emailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  icons = {
    faEnvelope,
    faLock
  }

  emailValidator = emailValidator;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ) { }

  login(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    const { email, password} = form.value;
    this.userService.login(email, password);
    const redirectUrl = this.activateRoute.snapshot.queryParams['redirectUrl'] || '/';
    this.router.navigate([redirectUrl]);
  }

}
