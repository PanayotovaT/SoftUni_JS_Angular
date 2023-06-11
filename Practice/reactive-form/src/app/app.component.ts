import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { PasswordValidator } from './shared/password.validator';
import { forbidenNameValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;

  get username() {
    return this.registrationForm.get('username');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''))
  }

  constructor(
    private fb: FormBuilder,
    private _registrationService: RegistrationService
    ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), forbidenNameValidator(/^password$/)]],
      email: [''],
      subscribe: [false],
      password: ['', [Validators.required] ],
      confirmPassword: ['', [Validators.required] ],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validators: PasswordValidator});

    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if(checkedValue) {
          email?.setValidators(Validators.required);
        } else {
           email?.clearValidators();
        }
        email?.updateValueAndValidity();
      })

  }




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

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error=> console.log('Error', error)
      );
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
