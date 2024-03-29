import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  errorMessage: string;
  constructor(activatedRoute: ActivatedRoute) {
    this.errorMessage = activatedRoute.snapshot.queryParams['error'];
    console.log(this.errorMessage);
  }


}
