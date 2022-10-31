import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomValidatorDirective } from './custom-validator.directive';
import { ShortenPipe } from './shorten.pipe';




@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    ShortenPipe
  ]

})
export class SharedModule { }
