import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return key === 'selected-theme' ? 'light' : null;
    });
    spyOn(localStorage, 'setItem').and.callFake(() => {});

    // Mock matchMedia
    spyOn(window, 'matchMedia').and.callFake((query: string) => {
      return {
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: jasmine.createSpy('addListener'),
        removeListener: jasmine.createSpy('removeListener'),
        addEventListener: jasmine.createSpy('addEventListener'),
        removeEventListener: jasmine.createSpy('removeEventListener'),
        dispatchEvent: jasmine.createSpy('dispatchEvent'),
      };
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set theme to light if no theme is saved and preferred theme is light', () => {
    spyOn(service as any, 'getPreferredTheme').and.returnValue('light');
    service = new ThemeService();
    expect(localStorage.setItem).toHaveBeenCalledWith('selected-theme', 'light');
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });

  it('should set theme to dark if no theme is saved and preferred theme is dark', () => {
    spyOn(service as any, 'getPreferredTheme').and.returnValue('dark');
    service = new ThemeService();
    expect(localStorage.setItem).toHaveBeenCalledWith('selected-theme', 'dark');
    expect(document.body.getAttribute('data-theme')).toBe('dark');
  });

  it('should set theme to saved theme if it exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue('dark');
    service = new ThemeService();
    expect(localStorage.setItem).toHaveBeenCalledWith('selected-theme', 'dark');
    expect(document.body.getAttribute('data-theme')).toBe('dark');
  });

  it('should toggle theme from light to dark', () => {
    spyOn(localStorage, 'getItem').and.returnValue('light');
    service.toggleTheme();
    expect(localStorage.setItem).toHaveBeenCalledWith('selected-theme', 'dark');
    expect(document.body.getAttribute('data-theme')).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    spyOn(localStorage, 'getItem').and.returnValue('dark');
    service.toggleTheme();
    expect(localStorage.setItem).toHaveBeenCalledWith('selected-theme', 'light');
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });
});