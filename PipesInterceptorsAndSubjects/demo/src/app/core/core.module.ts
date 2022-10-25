import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ParamsActivate } from './guards/params.activate';
import { appInterceptorProvider } from './app-interceptor';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ParamsActivate,
    appInterceptorProvider
  ],
  exports: [
    HeaderComponent,
    FooterComponent

  ]
})
export class CoreModule {}
