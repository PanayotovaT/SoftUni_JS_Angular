import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages: string[] = ['Javascript','Angular', 'React'];
  languageHasError: boolean = true;
  submitted: boolean = false;
  errorMsg = '';

  userModel = new User('', 'Bg', 'Sofia', '1000', 'Javascript', 'evening', 'alex@gmail.com', true);

  constructor(
    private _enrollService: EnrollmentService
  ){}

  validateLanguage(value: string): void {
    if (value === 'Select a Language'){
      this.languageHasError = true;
    } else {
      this.languageHasError = false;

    }
  }

  onSubmit(registerForm: User) {
    console.log(registerForm);
    this.submitted = true;
    this._enrollService.enroll(registerForm).subscribe(
      data => { console.log('success', data)},
      error => this.errorMsg = error.statusText
    )
  }
}


