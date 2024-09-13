import { TreeMenuItem } from '@interfaces/tree-menu.interface';
import { Component, inject, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { MenuService } from '@services/menu.service';
import { IconComponent } from "../icon/icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'fm-tree-menu',
  standalone: true,
  imports: [NgIf, IconComponent, NgClass],
  templateUrl: './tree-menu.component.html',
  styleUrl: './tree-menu.component.scss',
  
})
export class TreeMenuComponent {
  router = inject(Router)
  dr = inject(MenuService)
  @Input() menuItems!: TreeMenuItem[];
  selected?: number
  woldSelected?: TreeMenuItem

  toggle(item: TreeMenuItem, id: number): void {
    if (this.woldSelected) this.woldSelected!.expanded = false;
    this.selected = this.selected === id ? undefined : id;
    item.expanded = !item.expanded;
    this.woldSelected = item;

    if (item.path) this.navigation(item);
    if (item.action) item.action();

  }

  clearSelected(): void {
    this.selected = undefined;
  }

  navigation(item: TreeMenuItem): void {
    if (item.path) {
      this.router.navigate([item.path]);
    }
  }

}
