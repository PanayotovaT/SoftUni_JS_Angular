import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';
import { SearchAdComponent } from './search-ad/search-ad.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdsComponent,
    AdDetailsComponent,
    CreateAdComponent,
    UpdateAdComponent,
    SearchAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdsComponent,
    AdDetailsComponent,
    CreateAdComponent,
    UpdateAdComponent,
    SearchAdComponent,
  ]
})
export class AdsModule { }
