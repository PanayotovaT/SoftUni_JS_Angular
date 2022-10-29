import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

import {environment} from '../environments/environment';
const API_URL = environment.apiUrl;

@Injectable()

export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`, {withCredentials: true});
  }

  loadPosts(take?: number) {
    const query = take ? `?limit=${take}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, {withCredentials: true});
  }

  loadTheme(id: string)  {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`, {withCredentials: true});
  }

  saveTheme(data: any){
    return this.http.post<ITheme>(`${API_URL}/themes`, data, {withCredentials: true});
  }

}
