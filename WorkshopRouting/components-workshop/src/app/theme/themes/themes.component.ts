import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent  {

  themes: ITheme[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchTehemes();
  }

  fetchTehemes() : void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);

  }


}
