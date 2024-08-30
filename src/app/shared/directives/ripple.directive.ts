import { Directive, HostListener, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[fmRipple]',
  standalone: true,

})
export class RippleDirective {

  el = inject(ElementRef).nativeElement as HTMLElement
  renderer = inject(Renderer2)

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');

    const rect = this.el.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `150px`;

    const left = event.clientX - rect.left - ripple.offsetWidth ;
    const top = (event.clientY - rect.top - ripple.offsetHeight) /  2 ;

    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;    

    this.el.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
}
