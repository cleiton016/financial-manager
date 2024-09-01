import { Component } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'fm-navigation',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent extends AbstractComponent {

}
