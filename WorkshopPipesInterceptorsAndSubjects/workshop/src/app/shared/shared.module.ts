import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomValidatorDirective } from './custom-validator.directive';




@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    WelcomeMessageComponent,
    CustomValidatorDirective
  ]

})
export class SharedModule { }
