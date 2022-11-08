import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { CreateAdComponent } from './create-ad/create-ad.component';



@NgModule({
  declarations: [
    AdsComponent,
    AdDetailsComponent,
    CreateAdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdsComponent,
    AdDetailsComponent,
  ]
})
export class AdsModule { }
