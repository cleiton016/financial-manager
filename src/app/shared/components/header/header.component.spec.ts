import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ToggleComponent } from '@components/buttons/toggle/toggle.component';
import { ThemeService } from '@services/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, ToggleComponent],
      providers: [
        { provide: ThemeService, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste para verificar se o componente é criado corretamente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se o estado  de _initialized  moudou após a execução do effect
  it('should have changed initialized to true after running effect', () => {
    expect(component.isInitialized()).toBe(true);
  });

  // Teste para verificar se _initialized é definido como verdadeiro na primeira execução do efeito
  it('should set _initialized to true on first effect execution', () => {
    expect(component.isInitialized()).toBe(true);
  });

});