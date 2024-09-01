import { Component, effect, signal, OnDestroy } from '@angular/core';
import { AbstractComponent } from '@components/abstract/abstract.component';
import { ToggleComponent } from "../buttons/toggle/toggle.component";

@Component({
  selector: 'fm-header',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends AbstractComponent  implements OnDestroy{
  toggle = signal(this.themeService.currentTheme)
  private _initialized = false;
  
  stateToggle = effect(() =>{
    this.toggle()
    this.isInitialized()? this.toggleTheme(): this._initialized = true;
  })

  public isInitialized(): boolean {
    return this._initialized;
  }

  ngOnDestroy() {
    this.stateToggle.destroy
  }
}
