import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  icons = {
    faUser,
    faEnvelope,
    faPhone,
    faLock
  }

  constructor() { }

  ngOnInit(): void {
  }

}
