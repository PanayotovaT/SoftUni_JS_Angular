import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages: string[] = ['Javascript','Angular', 'React'];
  languageHasError: boolean = true;

  userModel = new User('', 'Bg', 'Sofia', '1000', 'Javascript', 'evening', 'alex@gmail.com', true);



  validateLanguage(value: string): void {
    if (value === 'Select a Language'){
      this.languageHasError = true;
    } else {
      this.languageHasError = false;

    }
  }

  onSubmit(registerForm: {}) {
    console.log(this.userModel);
    console.log(registerForm)

  }
}


