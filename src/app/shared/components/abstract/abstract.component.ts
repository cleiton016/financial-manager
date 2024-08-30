import { Component, inject } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'fm-abstract',
  standalone: true,
  imports: [],
  template: ''
})
export class AbstractComponent {
  themeService = inject(ThemeService)

  toggleTheme(): void {
    this.themeService.toggleTheme()
  }
}
