import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import  { HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

export const myStingInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule
  ],
  providers: [
    UserService,
  //   {
  //   provide: UserService,
  //   useClass: UserService
  // },
  {
    provide: myStingInjectionToken,
    useValue: 'Hello Alexander!'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
