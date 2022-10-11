import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user-list'

  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes);
// export const AppRoutingModule = RouterModule.forRoot(routes, {enableTracing: true});

// export class AppRoutingModule { }
