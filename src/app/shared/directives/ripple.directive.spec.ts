import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RippleDirective } from "./ripple.directive";


@Component({
  template: `<button fmRipple >teste</button>`
})
class TestComponent {}

describe('RippleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleDirective], // Importando a diretiva standalone
      declarations: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    inputEl = fixture.debugElement.query(By.directive(RippleDirective))?.nativeElement;
    fixture.detectChanges();
  });

  it('should create an instance of the directive', () => {
    expect(inputEl).toBeTruthy();
  });

  it('should create a ripple element on click', () => {
    const event = new MouseEvent('click');
    inputEl.dispatchEvent(event);
    const rippleElement = inputEl.querySelector('.ripple');
    expect(rippleElement).toBeTruthy();
  });

  it('should remove the ripple element after a delay', (done) => {
    const event = new MouseEvent('click');
    inputEl.dispatchEvent(event);
    setTimeout(() => {
      const rippleElement = inputEl.querySelector('.ripple');
      expect(rippleElement).toBeFalsy();
      done();
    }, 600);
  });
  
});