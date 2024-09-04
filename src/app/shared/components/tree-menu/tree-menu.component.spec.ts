import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeMenuComponent } from './tree-menu.component';
import { MenuService } from '@services/menu.service';
import { TreeMenuItem } from '@interfaces/tree-menu.interface';
import { IconComponent } from "../icon/icon.component";
import { NgClass, NgIf } from '@angular/common';

// Mock do MenuService
class MockMenuService {
  stateExpand = jest.fn();
}

describe('TreeMenuComponent', () => {
  let component: TreeMenuComponent;
  let fixture: ComponentFixture<TreeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIf, IconComponent, NgClass, TreeMenuComponent],
      providers: [{ provide: MenuService, useClass: MockMenuService }]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste para verificar se o componente é criado corretamente
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se o método toggle altera a propriedade expanded do item
  it('deve alternar a propriedade expanded do item', () => {
    const item: TreeMenuItem = { label: 'teste', icon: 'arrowDown', expanded: false };
    component.toggle(item, 1);
    expect(item.expanded).toBe(true);
  });

  // Teste para verificar se o método toggle define a propriedade selected corretamente
  it('deve definir a propriedade selected corretamente', () => {
    const item: TreeMenuItem = { label: 'teste', icon: 'arrowDown', expanded: false };
    component.toggle(item, 1);
    expect(component.selected).toBe(1);
    component.toggle(item, 1);
    expect(component.selected).toBe(undefined);
  });

  // Teste para verificar se o método clearSelected redefine a propriedade selected
  it('deve redefinir a propriedade selected ao chamar clearSelected', () => {
    component.selected = 1;
    component.clearSelected();
    expect(component.selected).toBe(undefined);
  });

  // Teste para verificar se o @Input menuItems é definido corretamente
  it('deve definir o @Input menuItems corretamente', () => {
    const menuItems: TreeMenuItem[] = [{ label: 'teste', icon: 'arrowDown', expanded: false }];
    component.menuItems = menuItems;
    expect(component.menuItems).toBe(menuItems);
  });
});