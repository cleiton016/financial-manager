import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.title()).toBeUndefined();
    expect(component.color()).toBe('var(--primary-color)');
    expect(component.contrast()).toBeUndefined();
    expect(component.animation()).toBe(false);
    expect(component.full()).toBe(false);
    expect(component.disable()).toBe(false);
    expect(component.outline()).toBe(false);
    expect(component.myClass()).toBeUndefined();
  });

  it('should apply hover effect on mouseover', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    component.applyHoverEffect(buttonElement);
    buttonElement.dispatchEvent(new MouseEvent('mouseover'));
    expect(buttonElement.style.transform).toBe('scale(1.05)');
    expect(buttonElement.style.backgroundColor).toBe(component.outline() ? 'transparent' : 'rgba(255, 255, 255, 0)');
    expect(buttonElement.style.border).toBe(component.outline()? 'solid 1px var(--primary-color)':'0px');
    expect(buttonElement.style.color).toBe('');
    expect(buttonElement.classList.contains('ripple-button')).toBe(true);
  });

  it('should remove hover effect on mouseout', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    component.applyHoverEffect(buttonElement);
    buttonElement.dispatchEvent(new MouseEvent('mouseout'));
    expect(buttonElement.style.transform).toBe('scale(1)');
    expect(buttonElement.style.backgroundColor).toBe(component.outline()? 'transparent' : '');
    expect(buttonElement.style.color).toBe(component.contrast() ? 'var(--on-brand)' : '');
    expect(buttonElement.classList.contains('ripple-button')).toBe(false);
  });
});