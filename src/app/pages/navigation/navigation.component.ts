import { Component } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { TreeMenuItem } from '@shared/interfaces/tree-menu.interface';
import { IconsNames } from '@enums/icons.enum';
import { MENU_NAVIGATION } from '@shared/utils/menu-navigation';

@Component({
  selector: 'fm-navigation',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent extends AbstractComponent {
  icons = IconsNames
  menuItems: TreeMenuItem[] = MENU_NAVIGATION
}
