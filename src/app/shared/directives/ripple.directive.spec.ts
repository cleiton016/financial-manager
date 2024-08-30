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
});