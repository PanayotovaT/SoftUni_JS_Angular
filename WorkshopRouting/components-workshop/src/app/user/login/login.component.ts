import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  icons = {
    faEnvelope,
    faLock
  }
  constructor() { }

  ngOnInit(): void {
  }

}
