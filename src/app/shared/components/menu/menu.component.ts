import { booleanAttribute, Component, computed, ElementRef, inject, Input, input, model } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { MenuService } from '@services/menu.service';
import { TreeMenuComponent } from "../tree-menu/tree-menu.component";
import { TreeMenuItem } from '@shared/interfaces/tree-menu.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'fm-menu',
  standalone: true,
  imports: [IconComponent, TreeMenuComponent, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dr = inject(MenuService)

  toggle = input(false, { transform: booleanAttribute})
  fixed = input(false, { transform: booleanAttribute})
  animation = input(true, { transform: booleanAttribute})

  @Input() menuItems!: TreeMenuItem[]
  ngOnInit() {
    this.dr.setShowMenu(this.toggle())
    this.dr.fixed = this.fixed()
    this.dr.showAnimation = this.animation()
  }
}
