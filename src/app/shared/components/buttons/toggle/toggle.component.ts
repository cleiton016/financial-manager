import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fm-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {

  /**
   * Essa variavel espera receber um signal, mas também pode ser utilizada com valor commum
   * @type {signal}
   * @memberof ToggleComponent
   */
  checked = model()
  
  toggleState() {
    this.checked.set(!this.checked())
  }
}
