import { Component } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { iAd } from 'src/app/services/interfaces/ad';

@Component({
  selector: 'app-search-ad',
  templateUrl: './search-ad.component.html',
  styleUrls: ['./search-ad.component.scss']
})
export class SearchAdComponent {
  searchedAds :iAd[] | undefined;

  constructor(private adService: AdsService) { }

  loadSearchedItems(query: string) :void {
    this.searchedAds = undefined;
    this.adService.loadSearchedItems(query).subscribe(ads =>{
      this.searchedAds = Object.values(ads)
      console.log(this.searchedAds)
    });
  }
}
