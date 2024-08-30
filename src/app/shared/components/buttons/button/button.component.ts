import { CommonModule } from '@angular/common';
import { AfterViewInit, booleanAttribute, ChangeDetectionStrategy, Component, input, ElementRef } from '@angular/core';
import { RippleDirective } from '@directives/ripple.directive';

type Contrast = 'onBrand';

@Component({
  selector: 'fm-button',
  standalone: true,
  imports: [
    CommonModule,
    RippleDirective
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent implements AfterViewInit { 
  title = input<string>();
  color = input<string>('var(--primary-color)');
  contrast = input<Contrast>();
  animation = input(false, { transform: booleanAttribute });
  full = input(false, { transform: booleanAttribute });
  disable = input(false, { transform: booleanAttribute });
  outline = input(false, { transform: booleanAttribute });
  myClass = input<string>();

  constructor(private elementRef: ElementRef) {}

  get getStyles() {
    return {
      'background-color': this.outline() ? 'transparent' : this.color(),
      'color': this.contrast() ? 'var(--on-brand)' : 'var(--surface-color)',
      'border-radius': '40px',
      'width': this.full() ? '100%' : 'auto',
      'height': '30px',
      'border': this.outline() ? 'solid 1px var(--primary-color)' : '0',
      'cursor': 'pointer',
      'overflow': 'hidden',
    };
  }

  private applyHoverEffect(buttonElement: HTMLElement) {
    buttonElement.addEventListener('mouseover', () => {
      buttonElement.style.transform = 'scale(1.05)';
      buttonElement.style.backgroundColor = this.outline() ? 'transparent' : '#ffffff00';
      buttonElement.style.border = 'solid 1px var(--primary-color)';
      buttonElement.style.color = 'var(--primary-color)';
      buttonElement.classList.add('ripple-button');
    });
    buttonElement.addEventListener('mouseout', () => {
      buttonElement.style.transform = 'scale(1)';
      buttonElement.style.backgroundColor = this.outline() ? 'transparent' : this.color();
      buttonElement.style.color = this.contrast() ? 'var(--on-brand)' : 'var(--surface-color)';
      buttonElement.classList.remove('ripple-button');
    });
  }

  private applyFocusEffect(buttonElement: HTMLElement) {
    buttonElement.addEventListener('focus', () => {
      // Adicionar foco, se necessário
    });
    buttonElement.addEventListener('blur', () => {
      // Remover foco, se necessário
    });
  }

  ngAfterViewInit() {
    if (this.animation() && !this.disable()) {
      const buttonElement = this.elementRef.nativeElement.querySelector('button');
      if (buttonElement) {
        this.applyHoverEffect(buttonElement);
        this.applyFocusEffect(buttonElement);
      }
    }
  }
}