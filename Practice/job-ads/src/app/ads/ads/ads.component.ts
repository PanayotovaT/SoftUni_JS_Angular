import { Component } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { iAd } from 'src/app/services/interfaces/ad';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {

  ads: iAd[] | undefined;

  constructor(private adService: AdsService) {
    this.loadAds();
   }

  loadAds(): void {
    console.log(this.ads)
    this.ads = undefined;
    this.adService.loadAllAds().subscribe(ads => this.ads = ads);
  }

}
