import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { IPost, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent  {

  themes: ITheme[] | undefined;
  posts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchTehemes();
    this.fetchPosts();
  }

  fetchTehemes() : void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);

  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.posts = posts);
  }


}
