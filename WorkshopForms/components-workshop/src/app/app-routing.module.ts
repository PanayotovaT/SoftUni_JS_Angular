import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeRouterModule } from './theme/theme-routing.module';

const routes: Routes = [
 {
   path: '',
   pathMatch: 'full',
   redirectTo: 'home'
 },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'**',
    component: NotFoundComponent
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
