import { Component } from '@angular/core';
import { AdsService } from '../services/ads.service';
import { iAd } from '../services/interfaces/ad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ads: iAd[] | undefined;

  constructor(private adService: AdsService) {
    this.loadAds();
  }

  loadAds(): void {
    this.ads = undefined;
    this.adService.loadAllAds().subscribe(ads =>{
      this.ads = Object.values(ads).slice(-3);
      console.log(this.ads)

    });
  }


}
