import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'selected-theme';

  constructor() {
    const savedTheme: any = localStorage.getItem(this.themeKey);
    const preferredTheme: any = this.getPreferredTheme();

    this.setTheme(savedTheme || preferredTheme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  get currentTheme(){
    return localStorage.getItem(this.themeKey) == 'dark'
  }

  toggleTheme(): void {
    const currentTheme = localStorage.getItem(this.themeKey) === 'dark' ? 'light' : 'dark';
    this.setTheme(currentTheme);
  }

  private getPreferredTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
