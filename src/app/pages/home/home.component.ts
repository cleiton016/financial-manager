import { Component, effect, ElementRef, inject, signal } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { ButtonComponent } from '@components/buttons/button/button.component';
import { ToggleComponent } from "@components/buttons/toggle/toggle.component";
import { InputTextComponent } from '@components/inputs/input-text/input-text.component';
import { InputDirective } from '@directives/input.directive';
import { RippleDirective } from '@directives/ripple.directive';
import { NavigationHome } from '@enums/navigation-home.enum';
import { LoginComponent } from "../login/login.component";
import { NgIf } from '@angular/common';





@Component({
  selector: 'fm-home',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent, RippleDirective, InputTextComponent, InputDirective, LoginComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends AbstractComponent {
  el = inject(ElementRef).nativeElement as HTMLElement;

  toggle = signal(this.themeService.currentTheme)
  private _initialized = false;

  navigation = NavigationHome;
  currentPage?: NavigationHome;

  classAnimation = 'slide-in-top';

  stateToggle = effect(() =>{
    this.toggle()
    this._initialized? this.toggleTheme(): this._initialized = true;
  })

  setNavigation(page: NavigationHome): void {
    console.log('Passou aqui');
    
    this.currentPage = page;
  }

  setAnimation(when:'in' | 'out' ,animation: string, navigate) {
    this.classAnimation = animation
    
    // apos executar a animação, chamar o callback
    setTimeout(() => {
      this.setNavigation(navigate)
    }, when === 'in' ? 300 : 600)
  }

}
