import { Component, effect, ElementRef, inject, signal, OnDestroy } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { ButtonComponent } from '@components/buttons/button/button.component';
import { ToggleComponent } from "@components/buttons/toggle/toggle.component";
import { InputDirective } from '@directives/input.directive';
import { RippleDirective } from '@directives/ripple.directive';
import { NavigationHome } from '@enums/navigation-home.enum';
import { LoginComponent } from "../login/login.component";
import { NgIf } from '@angular/common';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'fm-home',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent, RippleDirective, InputDirective, LoginComponent, NgIf, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends AbstractComponent implements OnDestroy {
  el = inject(ElementRef).nativeElement as HTMLElement;

  toggle = signal(this.themeService.currentTheme)
  private _initialized = false;

  navigation = NavigationHome;
  currentPage?: NavigationHome;

  classAnimation = 'slide-in-top';

  stateToggle = effect(() =>{
    this.toggle()
    this.isInitialized()? this.toggleTheme(): this._initialized = true;
  })


  setNavigation(page: NavigationHome): void {
    this.currentPage = page;
  }

  setAnimation(when:'in' | 'out' ,animation: string, navigate) {
    this.classAnimation = animation
    setTimeout(() => {
      this.setNavigation(navigate)
    }, when === 'in' ? 300 : 600)
  }

  public isInitialized(): boolean {
    return this._initialized;
  }

  ngOnDestroy() {
    this.stateToggle.destroy
  }

}
