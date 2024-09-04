import { TestBed } from '@angular/core/testing';
import { AbstractComponent } from './abstract.component';
import { MenuService } from '@services/menu.service';
import { ThemeService } from '@services/theme.service';

// Mock para o ThemeService
class MockThemeService {
  toggleTheme = jest.fn();
}

// Mock para o MenuService
class MockMenuService {
  changeShowMenu = jest.fn();
}

describe('AbstractComponent', () => {
  let component: AbstractComponent;
  let themeService: MockThemeService;
  let menuService: MockMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AbstractComponent,
        { provide: ThemeService, useClass: MockThemeService },
        { provide: MenuService, useClass: MockMenuService }
      ]
    });

    component = TestBed.inject(AbstractComponent);
    themeService = TestBed.inject(ThemeService) as unknown as MockThemeService;
    menuService = TestBed.inject(MenuService) as unknown as MockMenuService;
  });

  // Teste para verificar se o componente foi criado
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se o método toggleTheme chama o método toggleTheme do ThemeService
  it('deve chamar toggleTheme do ThemeService quando toggleTheme for chamado', () => {
    component.toggleTheme();
    expect(themeService.toggleTheme).toHaveBeenCalled();
  });

  // Teste para verificar se o método dragMenuState chama o método changeShowMenu do MenuService
  it('deve chamar changeShowMenu do MenuService quando dragMenuState for chamado', () => {
    component.dragMenuState();
    expect(menuService.changeShowMenu).toHaveBeenCalled();
  });
});