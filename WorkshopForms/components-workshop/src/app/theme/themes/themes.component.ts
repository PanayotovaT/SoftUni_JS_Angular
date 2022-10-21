import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ContentService } from '../../content.service';
import { IPost, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent  {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  themes: ITheme[] | undefined;
  posts: IPost[] | undefined;

  constructor(
    private contentService: ContentService,
    private userService: UserService
    ) {
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
