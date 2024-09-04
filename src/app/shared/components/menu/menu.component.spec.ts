import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuService } from '@services/menu.service';
import { TreeMenuItem } from '@shared/interfaces/tree-menu.interface';
import { IconComponent } from "../icon/icon.component";
import { TreeMenuComponent } from "../tree-menu/tree-menu.component";
import { NgIf } from '@angular/common';
import { ComponentFixture } from '@angular/core/testing';

// Mock do MenuService
class MockMenuService {
  setShowMenu = jest.fn();
  fixed = false;
  showAnimation = true;
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: MockMenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent, TreeMenuComponent, NgIf],
      providers: [{ provide: MenuService, useClass: MockMenuService }]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuService) as unknown as MockMenuService;
  });

  // Teste para verificar se o componente é criado corretamente
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se o método ngOnInit chama setShowMenu com o valor correto
  it('deve chamar setShowMenu com o valor de toggle', () => {
    fixture.componentRef.setInput('toggle', true);
    component.ngOnInit();
    expect(menuService.setShowMenu).toHaveBeenCalledWith(true);
  });

  // Teste para verificar se o valor de fixed é atribuído corretamente ao serviço
  it('deve atribuir o valor de fixed ao serviço', () => {
    fixture.componentRef.setInput('fixed', true);
    component.ngOnInit();
    expect(menuService.fixed).toBe(true);
  });

  // Teste para verificar se o valor de animation é atribuído corretamente ao serviço
  it('deve atribuir o valor de animation ao serviço', () => {
    fixture.componentRef.setInput('animation', false);
    component.ngOnInit();
    expect(menuService.showAnimation).toBe(false);
  });

  // Teste para verificar se o menuItems é atribuído corretamente
  it('deve atribuir menuItems corretamente', () => {
    const mockMenuItems: TreeMenuItem[] = [{  label: 'Item 1', icon: 'arrowDown' , children: [] }];
    component.menuItems = mockMenuItems;
    expect(component.menuItems).toBe(mockMenuItems);
  });
});