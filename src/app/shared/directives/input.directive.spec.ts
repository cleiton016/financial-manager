import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputDirective } from './input.directive';

@Component({
  template: `<input fmTextInput>`
})
class TestComponent {}

describe('InputDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDirective], // Importando a diretiva standalone
      declarations: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    inputEl = fixture.debugElement.query(By.directive(InputDirective)).nativeElement;
    fixture.detectChanges();
  });

  it('should create an instance of the directive', () => {
    expect(inputEl).toBeTruthy();
  });

  it('should apply default styles on initialization', () => {
    const styles = inputEl.style;
    expect(styles.fontSize).toBe('16px');
    expect(styles.fontFamily).toBe('Verdana');
    expect(styles.padding).toBe('10px 15px');
    expect(styles.width).toBe('auto');
    expect(styles.flexWrap).toBe('a');
    expect(styles.outline).toBe('none');
    expect(styles.background).toBe('');
    expect(styles.color).toBe('');
    expect(styles.border).toBe('1px solid #c4d1eb');
    expect(styles.borderRadius).toBe('5px');
    expect(styles.boxShadow).toBe('var(--box-shadow)');
  });

  it('should apply focus styles on focus', () => {
    inputEl.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    const styles = inputEl.style;
    expect(styles.outline).toBe('1px solid var(--primary-color)');
    expect(styles.outlineOffset).toBe('-1px');
    expect(styles.boxShadow).toBe('none');
    expect(styles.borderColor).toBe('');
    expect(styles.border).toBe('0px none');
  });

  it('should revert to default styles on blur', () => {
    inputEl.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    inputEl.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    const styles = inputEl.style;
    expect(styles.fontSize).toBe('16px');
    expect(styles.fontFamily).toBe('Verdana');
    expect(styles.padding).toBe('10px 15px');
    expect(styles.width).toBe('auto');
    expect(styles.flexWrap).toBe('a');
    expect(styles.outline).toBe('none');
    expect(styles.background).toBe('');
    expect(styles.color).toBe('');
    expect(styles.border).toBe('1px solid #c4d1eb');
    expect(styles.borderRadius).toBe('5px');
    expect(styles.boxShadow).toBe('var(--box-shadow)');
  });
});