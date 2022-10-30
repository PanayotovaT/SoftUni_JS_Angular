import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

@Injectable()

export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>(`/api/themes`);
  }

  loadPosts(take?: number) {
    const query = take ? `?limit=${take}` : ''
    return this.http.get<IPost[]>(`/api/posts${query}`);
  }

  loadTheme(id: string)  {
    return this.http.get<ITheme>(`/api/themes/${id}`);
  }

  saveTheme(data: any){
    return this.http.post<ITheme>(`/api/themes`, data);
  }

}
