import { Component, ElementRef, inject } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { ButtonComponent } from '@components/buttons/button/button.component';
import { ToggleComponent } from "@components/buttons/toggle/toggle.component";
import { InputDirective } from '@directives/input.directive';
import { RippleDirective } from '@directives/ripple.directive';
import { NavigationHome } from '@enums/navigation.enum';
import { LoginComponent } from "../login/login.component";
import { NgIf } from '@angular/common';
import { RegisterComponent } from "../register/register.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'fm-home',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent, RippleDirective, InputDirective, LoginComponent, NgIf, RegisterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends AbstractComponent {
  el = inject(ElementRef).nativeElement as HTMLElement;

  navigation = NavigationHome;
  currentPage?: NavigationHome;

  classAnimation = 'slide-in-top';

  setNavigation(page: NavigationHome): void {
    this.currentPage = page;
  }

  setAnimation(when:'in' | 'out' ,animation: string, navigate) {
    this.classAnimation = animation
    setTimeout(() => {
      this.setNavigation(navigate)
    }, when === 'in' ? 300 : 600)
  }
}
