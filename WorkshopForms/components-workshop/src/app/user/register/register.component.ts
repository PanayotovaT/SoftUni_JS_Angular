import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { emailValidator, sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  icons = {
    faUser,
    faEnvelope,
    faPhone,
    faLock
  }

  killSubscription = new Subject();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, emailValidator]],
      tel: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePassword: ['', [Validators.required, sameValueAsFactory(()=> this.form?.get('password')!, this.killSubscription
      )]]
    })
   }

  register(): void {
    if(this.form.invalid){ return; }
    console.log(this.form);
  }

  ngOnDestroy(): void {
      // this.killSubscription.next(null);
      this.killSubscription.complete();
  }
}
