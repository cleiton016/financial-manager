import { Component, inject } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'fm-abstract',
  standalone: true,
  imports: [],
  template: ''
})
export class AbstractComponent {
  themeService = inject(ThemeService)
  dr = inject(MenuService)

  toggleTheme(): void {
    this.themeService.toggleTheme()
  }

  dragMenuState(): void {
    this.dr.changeShowMenu()
  }
}
