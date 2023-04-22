import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages: string[] = ['JavaScript', 'Angular', 'React'];

  userModel = new User('Alex', 'Bg', 'Sofia', '1000', 'JavaScript', 'morning', 'alex@gmail.com', true);
}
