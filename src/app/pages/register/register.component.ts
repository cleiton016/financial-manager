import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/buttons/button/button.component";
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'fm-register',
  standalone: true,
  imports: [ButtonComponent, SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
