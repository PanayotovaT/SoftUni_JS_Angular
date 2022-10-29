import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  theme: ITheme | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot.params['themeId']);
    this.fetchTheme();
  }

  fetchTheme(): void {
    this.theme = undefined;
    this.contentService
      .loadTheme(this.activatedRoute.snapshot.params['themeId'])
      .subscribe(theme => {
        console.log(theme)
        return this.theme = theme
      });

  }

}
