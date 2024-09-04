import { Component, signal } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { TreeMenuItem } from '@shared/interfaces/tree-menu.interface';
import { IconsNames } from '@enums/icons.enum';

@Component({
  selector: 'fm-navigation',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent extends AbstractComponent {
  icons = IconsNames
  menuItems: TreeMenuItem[] = [
    {
      label: 'Settings',
      icon: this.icons.settings,
      children: [
        { label: 'Profile' , icon: this.icons.person },
        { label: 'Change Password', icon: 'lockClosed' },
        { label: 'Logout', icon: this.icons.logout }
      ],
    },
    { label: 'Investimentos', icon: this.icons.banknotes },
    {
      label: 'Gastos',
      icon: this.icons.expenses,
      
    }
  ];
}
