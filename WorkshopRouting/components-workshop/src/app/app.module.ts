import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    ThemeModule,
    FontAwesomeModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
