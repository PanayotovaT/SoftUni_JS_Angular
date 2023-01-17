import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AdsService } from 'src/app/services/ads.service';
import { iAd } from 'src/app/services/interfaces/ad';


@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  ad: iAd | undefined;

  constructor(
    private adService: AdsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(() => { this.ad = undefined }),
      switchMap(({ id }) => this.adService.loadOneById(id))
    ).subscribe(ad => this.ad = ad);
  }

}
