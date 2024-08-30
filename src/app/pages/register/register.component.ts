import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/buttons/button/button.component";

@Component({
  selector: 'fm-register',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
