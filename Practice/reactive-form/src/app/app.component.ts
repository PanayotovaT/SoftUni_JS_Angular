import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get username(){
    return this.registrationForm.get('username');
  }

  constructor(private fb: FormBuilder) { }


  registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  })



  //SETVALUE -need to provide all the values
  // loadData() {
  //   this.registrationForm.setValue({
  //     username: 'Sofia',
  //     password: '123',
  //     confirmPassword: '123',
  //     address: {
  //       city: 'Milan',
  //       state: 'Italy',
  //       postalCode: '123456'
  //     }
  //   })
  // }

  //PATCHVALUE -- update just some fields
  loadData() {
    this.registrationForm.patchValue({
      username: 'Sofia',
      password: '123',
      confirmPassword: '123',
    })
  }
}


//MANUALY creating form controls

// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   registrationForm = new FormGroup({
//     username: new FormControl('Alexander'),
//     password: new FormControl(''),
//     confirmPassword: new FormControl(''),
//     address: new FormGroup({
//       city: new FormControl(''),
//       state: new FormControl(''),
//       postalCode: new FormControl('')
//     })

//   });
// //SETVALUE -need to provide all the values
//   // loadData() {
//   //   this.registrationForm.setValue({
//   //     username: 'Sofia',
//   //     password: '123',
//   //     confirmPassword: '123',
//   //     address: {
//   //       city: 'Milan',
//   //       state: 'Italy',
//   //       postalCode: '123456'
//   //     }
//   //   })
//   // }

//   //PATCHVALUE -- update just some fields
//   loadData() {
//     this.registrationForm.patchValue({
//       username: 'Sofia',
//       password: '123',
//       confirmPassword: '123',
//     })
//   }
// }
