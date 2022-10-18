import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  { HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestModule } from './test/test.module';
import { HighlightDirective } from './highlight.directive';
import { MyIfDirective } from './my-if.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SameValueDirective } from './same-value.directive';

export const myStingInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HighlightDirective,
    MyIfDirective,
    LoginComponent,
    SameValueDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    SharedModule,
    UserModule,
    AppRoutingModule,
    TestModule
  ],
  providers: [

  {
    provide: myStingInjectionToken,
    useValue: 'Hello Alexander!'
  },

],
  bootstrap: [AppComponent]
})
export class AppModule { }
