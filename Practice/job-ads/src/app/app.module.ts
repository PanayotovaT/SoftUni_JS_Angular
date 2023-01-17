import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdsModule } from './ads/ads.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdsService } from './services/ads.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    AdsModule,
    HttpClientModule
  ],
  providers: [AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
