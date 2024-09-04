import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  /* Variaveis para exibição do menu */
  private showMenu = signal(false);
  private _animation = '';
  fixed = false;
  showAnimation = true;
  stateShowMenu = computed(() => this.showMenu());

  /* Variaveis para expandir e recolher o menu */
  private _expand = signal(false);
  stateExpand = computed(() => this._expand());


  /* Função para exibir o menu */
  changeShowMenu() {
    if (this.fixed) return;
    if (this.showAnimation){
      this._animation = this.showMenu()? 'tilt-out-left-1': 'tilt-in-left-1'
      setTimeout(() => {  this.showMenu.update(value => !value) }, this.showMenu()? 500: 0)
    } else {
      this.showMenu.update(value => !value)
    }
  }

  get animationClass(): string {
    return this._animation;
  }

  setShowMenu(value: boolean) {
    this.showMenu.set(value);
  }

  /* Função para expandir e recolher o menu */
  changeExpand() {
    this._expand.update(value => !value);
  }

}
