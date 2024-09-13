import { NgStyle } from '@angular/common';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { Icons, IconsNames } from '@enums/icons.enum';
import { IconService } from '@services/icon.service';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'fm-icon',
  standalone: true,
  imports: [SafeHtmlPipe, NgStyle],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  iconService = inject(IconService);

  @Input() name!: Icons
  size = input('30px', {transform: (value: string) => `${value}px`});
  color = input('var(--on-brand)');
  
  svgIcon: string = '';

  subscribes = []
  ngOnInit(): void {
    this.iconService.getIcon(this.iconName).subscribe(icon => {
      icon = icon.replace(/width="[0-9]*px"/g, `width="${this.size()}"`);
      icon = icon.replace(/height="[0-9]*px"/g, `height="${this.size()}"`);
      icon = icon.replaceAll(/stroke=".*?"/g, `stroke="${this.color()}"`);
      icon = icon.replaceAll(/fill="#.*?"/g, `fill="${this.color()}"`);     
      this.svgIcon = icon;
    });
  }
  private get iconName() {
    return IconsNames[this.name];
  }
}
