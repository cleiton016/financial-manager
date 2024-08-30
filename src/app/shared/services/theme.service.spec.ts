import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { WindowRef } from './windowRef';

describe('ThemeService', () => {
  let service: ThemeService;
  let windowRefMock: any;

  beforeEach(() => {
    windowRefMock = {
      nativeWindow: {
        matchMedia: jest.fn().mockReturnValue({
          matches: false
        })
      }
    };

    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: WindowRef, useValue: windowRefMock }
      ]
    });

    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set theme to light', () => {
    service.setTheme('light');
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('selected-theme')).toBe('light');
  });

  it('should set theme to dark', () => {
    service.setTheme('dark');
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('selected-theme')).toBe('dark');
  });

  it('should toggle theme from light to dark', () => {
    service.setTheme('light');
    service.toggleTheme();
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('selected-theme')).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    service.setTheme('dark');
    service.toggleTheme();
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('selected-theme')).toBe('light');
  });

  it('should return true for currentTheme when theme is dark', () => {
    service.setTheme('dark');
    expect(service.currentTheme).toBe(true);
  });

  it('should return false for currentTheme when theme is light', () => {
    service.setTheme('light');
    expect(service.currentTheme).toBe(false);
  });

  it('should set theme based on preferred theme if no saved theme', () => {
    windowRefMock.nativeWindow.matchMedia.mockReturnValue({ matches: false });
    new ThemeService(windowRefMock);
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('selected-theme')).toBe('light');
  });

  it('should set theme based on saved theme if available', () => {
    localStorage.setItem('selected-theme', 'light');
    new ThemeService(windowRefMock);
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('selected-theme')).toBe('light');
  });
});