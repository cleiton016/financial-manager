import { TreeMenuItem } from '@interfaces/tree-menu.interface';
import { Component, inject, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { MenuService } from '@services/menu.service';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'fm-tree-menu',
  standalone: true,
  imports: [NgIf, IconComponent, NgClass],
  templateUrl: './tree-menu.component.html',
  styleUrl: './tree-menu.component.scss',
  
})
export class TreeMenuComponent {
  dr = inject(MenuService)
  @Input() menuItems!: TreeMenuItem[];
  selected?: number

  toggle(item: TreeMenuItem, id: number): void {
    this.selected = this.selected === id ? undefined : id;
    item.expanded = !item.expanded;
  }

  clearSelected(): void {
    this.selected = undefined;
  }

}
