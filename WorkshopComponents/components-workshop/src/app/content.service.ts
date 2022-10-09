import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

@Injectable()

export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    this.http.get<ITheme[]>('http://localhost:3000/api/themes');
  }

  loadPosts() {
    this.http.get<IPost[]>('http://localhost:3000/api/posts');
  }


}
