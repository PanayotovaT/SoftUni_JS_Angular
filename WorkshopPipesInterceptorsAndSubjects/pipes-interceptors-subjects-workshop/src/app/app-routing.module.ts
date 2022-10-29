import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
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
    path: 'user',
    loadChildren: ()=> import ('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'error',
    component: ErrorComponent
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
