import { NgStyle } from '@angular/common';
import { Component, inject, input, InputSignal } from '@angular/core';
import { IconsNames } from '@enums/icons.enum';
import { IconService } from '@services/icon.service';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'fm-icon',
  standalone: true,
  imports: [SafeHtmlPipe, NgStyle],
  template: `<span [style.width]="size()" [style.height]="size()" [innerHTML]="svgIcon | safeHtml"> </span>`,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  iconService = inject(IconService);
  
  name: InputSignal<IconsNames | any> = input();
  size = input('30px', {transform: (value: string) => `${value}px`});
  color = input('var(--on-brand)');
  
  svgIcon: string = '';

  subscribes = []
  ngOnInit(): void {
    console.log(this.size());
    
    this.iconService.getIcon(this.iconName).subscribe(icon => {
      icon = icon.replace(/width="[0-9]*px"/g, `width="${this.size()}"`);
      icon = icon.replace(/height="[0-9]*px"/g, `height="${this.size()}"`);
      icon = icon.replaceAll(/stroke=".*?"/g, `stroke="${this.color()}"`);     
      this.svgIcon = icon;
    });
  }
  private get iconName() {
    return IconsNames[this.name()];
  }
}
