import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAnimatedComponent } from './input-animated.component';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('InputAnimatedComponent', () => {
  let component: InputAnimatedComponent;
  let fixture: ComponentFixture<InputAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, InputAnimatedComponent],
      providers: [
        {
          provide: NgControl,
          useValue: {
            valueAccessor: {
              writeValue: jest.fn(),
              registerOnChange: jest.fn(),
              registerOnTouched: jest.fn(),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAnimatedComponent);
    fixture.componentRef.setInput('label', 'Teste');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste para verificar se o componente é criado corretamente
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se o valor é escrito corretamente no input
  it('deve escrever o valor no input', () => {
    const testValue = 'Teste';
    component.writeValue(testValue);
    expect(component.inputValue).toBe(testValue);
  });

  // Teste para verificar se o valor do input é atualizado corretamente via ngOnChange
  it('deve chamar ngOnChange quando o valor do input mudar', () => {
    const fn = jest.fn();
    component.registerOnChange(fn); // Simula a mudança no valor do input
    component.inputValue = 'Novo valor';
    fixture.detectChanges(); // Simula o evento de input que dispara o ngOnChange
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.dispatchEvent(new Event('input')); 
    expect(fn).toHaveBeenCalled();
    });

  // Teste para verificar se o valor do input é atualizado corretamente via ngOnTouched
  it('deve chamar ngOnTouched quando o input for tocado', () => {
    const fn = jest.fn();
    component.registerOnTouched(fn);

    // Simula o foco no input
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.dispatchEvent(new Event('focus'));

    expect(fn).toHaveBeenCalled();
  });

  // Teste para verificar se o estado de foco é alterado corretamente ao focar no input
  it('deve alterar o estado de foco ao focar no input', () => {
    component.onFocus();
    expect(component.isFocused).toBe(true);
  });

  // Teste para verificar se o estado de foco é alterado corretamente ao desfocar do input
  it('deve alterar o estado de foco ao desfocar do input', () => {
    component.inputValue = ''; // Simula que o input está vazio
    component.onBlur();
    expect(component.isFocused).toBe(false);

    component.inputValue = 'Teste'; // Simula que o input tem valor
    component.onBlur();
    expect(component.isFocused).toBe(true);
  });

  // Teste para verificar se o estado de desabilitado é alterado corretamente
  it('deve alterar o estado de desabilitado', () => {
    component.setDisabledState!(true);
    expect(component.isDisabled).toBe(true);

    component.setDisabledState!(false);
    expect(component.isDisabled).toBe(false);
  });

  // Teste para verificar se o valor do input é atualizado corretamente via ngOnTouched
  it('deve chamar ngOnTouched quando o input for tocado', () => {
    const fn = jest.fn();
    component.registerOnTouched(fn);
    component.onFocus();
    expect(fn).toHaveBeenCalled();
  });

  // Teste para verificar se o label é atualizado corretamente via input
  it('deve atualizar o label via input', () => {
    fixture.componentRef.setInput('label', 'Novo Label');
    fixture.detectChanges();
    expect(component.label()).toBe('Novo Label');
  });
});