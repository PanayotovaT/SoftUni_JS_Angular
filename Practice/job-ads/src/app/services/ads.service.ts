import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { iAd } from './interfaces/ad';
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }

  loadAllAds() {
    return this.http.get <iAd[]>(`${API_URL}/jsonstore/ads`);
  }

}
