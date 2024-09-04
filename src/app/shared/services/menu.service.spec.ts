import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
    service = TestBed.inject(MenuService);
  });

  // Teste para verificar se o serviço é criado
  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  // Teste para verificar o estado inicial do menu
  it('deve ter o menu inicialmente oculto', () => {
    expect(service.stateShowMenu()).toBe(false);
  });

  // Teste para verificar a mudança de estado do menu
  it('deve alternar o estado do menu quando changeShowMenu é chamado', () => {
    service.fixed = false;
    service.showAnimation = false;
    service.changeShowMenu();
    expect(service.stateShowMenu()).toBe(true);
    service.changeShowMenu();
    expect(service.stateShowMenu()).toBe(false);
  });

  // Teste para verificar se a animação é definida corretamente ao exibir o menu
  it('deve definir a animação corretamente ao exibir o menu', () => {
    service.changeShowMenu();
    expect(service.animationClass).toBe('tilt-in-left-1');
  });

  // Teste para verificar se a animação é definida corretamente ao ocultar o menu
  it('deve definir a animação corretamente ao ocultar o menu', () => {
    service.changeShowMenu(); // Exibir o menu primeiro
    service.changeShowMenu(); // Ocultar o menu
    setTimeout(() => {
      expect(service.animationClass).toBe('tilt-out-left-1');
    }, 500); // Esperar a animação terminar
  });

  // Teste para verificar se o menu não muda de estado quando fixo
  it('não deve mudar o estado do menu quando fixo', () => {
    service.fixed = true;
    service.changeShowMenu();
    expect(service.stateShowMenu()).toBe(false);
  });

  // Teste para verificar se o estado de expansão inicial é falso
  it('deve ter o estado de expansão inicialmente falso', () => {
    expect(service.stateExpand()).toBe(false);
  });

  // Teste para verificar a mudança de estado de expansão
  it('deve alternar o estado de expansão quando changeExpand é chamado', () => {
    service.changeExpand();
    expect(service.stateExpand()).toBe(true);
    service.changeExpand();
    expect(service.stateExpand()).toBe(false);
  });

  // Teste para verificar se setShowMenu define o estado corretamente
  it('deve definir o estado do menu corretamente quando setShowMenu é chamado', () => {
    service.setShowMenu(true);
    expect(service.stateShowMenu()).toBe(true);
    service.setShowMenu(false);
    expect(service.stateShowMenu()).toBe(false);
  });
});