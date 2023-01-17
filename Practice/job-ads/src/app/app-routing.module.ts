import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdsComponent } from './ads/ads/ads.component'
import { AdDetailsComponent } from './ads/ad-details/ad-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CreateAdComponent } from './ads/create-ad/create-ad.component';
import { UpdateAdComponent } from './ads/update-ad/update-ad.component';
import { SearchAdComponent } from './ads/search-ad/search-ad.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'ads/:id',
    component: AdDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create',
    component: CreateAdComponent
  },
  {
    path: 'update',
    component: UpdateAdComponent
  },
  {
    path: 'search',
    component: SearchAdComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
