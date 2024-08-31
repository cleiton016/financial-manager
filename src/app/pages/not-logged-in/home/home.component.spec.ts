import { HomeComponent } from '@pages/not-logged-in/home/home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowRef } from '@services/windowRef';
import { NavigationHome } from '@enums/navigation-home.enum';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let windowRefMock: any;

  beforeEach(async () => {
    windowRefMock = {
      nativeWindow: {
        matchMedia: jest.fn().mockReturnValue({
          matches: false
        })
      }
    };
    
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: WindowRef, useValue: windowRefMock }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.toggle()).toBe(component.themeService.currentTheme);
    expect(component.isInitialized()).toBe(true);
    expect(component.navigation).toBe(NavigationHome);
    expect(component.currentPage).toBeUndefined();
    expect(component.classAnimation).toBe('slide-in-top');
  });

  it('should set navigation correctly', () => {
    component.setNavigation(NavigationHome.login);
    expect(component.currentPage).toBe(NavigationHome.login);
  });

  it('should set animation correctly', () => {
    const navigateMock = NavigationHome.login;
    component.setAnimation('in', 'fade-in', navigateMock);
    expect(component.classAnimation).toBe('fade-in');
    setTimeout(() => {
      expect(component.currentPage).toBe(navigateMock);
    }, 300);
    });
  it('should set animation correctly', () => {
    const navigateMock = NavigationHome.login;
    component.setAnimation('in', 'fade-in', navigateMock);
    expect(component.classAnimation).toBe('fade-in');
    setTimeout(() => {
      expect(component.currentPage).toBe(navigateMock);
    }, 300);
  });
  
  it('should set animation correctly with "out" parameter', () => {
    const navigateMock = NavigationHome.register;
    component.setAnimation('out', 'fade-out', navigateMock);
    expect(component.classAnimation).toBe('fade-out');
    setTimeout(() => {
      expect(component.currentPage).toBe(navigateMock);
    }, 600);
  });
});
