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

  loadOneById(id: string) {
    return this.http.get<iAd>(`${API_URL}/jsonstore/ads/${id}`)
  }

  loadSearchedItems(query: string) {
    return this.http.get <iAd[]>(`${API_URL}/jsonstore/ads?where=headline%3D%22${query}%22`);
  }
}
