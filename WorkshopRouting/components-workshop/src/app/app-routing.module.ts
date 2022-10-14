import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThemeRouterModule } from './theme/theme-routing.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ThemeRouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
