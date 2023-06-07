import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
registrationForm =  new FormGroup({
  username: new FormControl('Alexander'),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
  address: new FormGroup({
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl('')
  })

});

loadData(){
this.registrationForm.setValue({
  username: 'Sofia',
  password: '123',
  confirmPassword: '123',
  address: {
    city: 'Milan',
    state: 'Italy',
    postalCode: '123456'
  }
})
}

}
