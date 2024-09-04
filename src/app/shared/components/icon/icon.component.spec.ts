import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IconComponent } from './icon.component';
import { IconService } from '@services/icon.service';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';
import { IconsNames } from '@enums/icons.enum';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let iconServiceMock: any;

  beforeEach(async () => {
    iconServiceMock = {
      getIcon: jest.fn().mockImplementation(() => of('')),
    };

    await TestBed.configureTestingModule({
      imports: [IconComponent, SafeHtmlPipe],
      providers: [
        { provide: IconService, useValue: iconServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  // Teste para verificar se o componente é criado corretamente
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se o ícone SVG é carregado e processado corretamente
  it('deve carregar e processar o ícone SVG corretamente', () => {
    const mockSvgIcon = '<svg width="24px" height="24px" stroke="black"></svg>';
    iconServiceMock.getIcon.mockReturnValue(of(mockSvgIcon));

    fixture.componentRef.setInput('name', 'SomeIcon');
    fixture.detectChanges();

    expect(iconServiceMock.getIcon).toHaveBeenCalledWith(IconsNames['SomeIcon']);
    expect(component.svgIcon).toContain(`width="${component.size()}"`);
    expect(component.svgIcon).toContain(`height="${component.size()}"`);
    expect(component.svgIcon).toContain(`stroke="${component.color()}"`);
  });

  // Teste para verificar se o tamanho do ícone é aplicado corretamente
  it('deve aplicar o tamanho do ícone corretamente', () => {
    fixture.componentRef.setInput('size', '40');
    fixture.detectChanges();

    const spanElement: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(spanElement.style.width).toBe('40px');
    expect(spanElement.style.height).toBe('40px');
  });

  // Teste para verificar se a cor do ícone é aplicada corretamente
  it('deve aplicar a cor do ícone corretamente', () => {
    fixture.componentRef.setInput('color', 'red');
    fixture.detectChanges();

    const mockSvgIcon = '<svg width="24px" height="24px" stroke="black"></svg>';
    iconServiceMock.getIcon.mockReturnValue(of(mockSvgIcon));

    fixture.componentRef.setInput('name', 'SomeIcon');
    fixture.detectChanges();
    component.ngOnInit();

    expect(component.svgIcon).toContain(`stroke="red"`);
  });
});