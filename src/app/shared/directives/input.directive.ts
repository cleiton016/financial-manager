import { AfterViewInit, Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: 'input[fmTextInput]',
  standalone: true
})
export class InputDirective implements OnInit, AfterViewInit {

  el = inject(ElementRef).nativeElement as HTMLElement


  ngOnInit(): void {
    this.defaultStyle()
  }

  private defaultStyle() {
    this.el.style.fontSize = '16px'
    this.el.style.fontFamily = 'Verdana'
    this.el.style.padding = '10px 15px';
    this.el.style.width = 'auto';
    this.el.style.flexWrap = 'a'

    this.el.style.outline = 'none';
    this.el.style.background = 'var(--input-background)';
    this.el.style.color = 'var(--input-color)';
    this.el.style.border = '1px solid #C4D1EB';
    this.el.style.borderRadius = '5px';
    this.el.style.boxShadow = 'var(--box-shadow)';
  }

  private onFocus(): void {
    this.el.addEventListener('focus', () => {
      this.el.style.outline = '1px solid var(--primary-color)';
      this.el.style.outlineOffset = '-1px';
      this.el.style.boxShadow = 'none';
      this.el.style.borderColor = '#94a3b8';
      this.el.style.border = '0 none'
    });
    this.el.addEventListener('blur', () => {
      this.el.style.outlineOffset = '';
      this.defaultStyle()
    });
  }

  ngAfterViewInit() {
    this.onFocus()
  }

}
