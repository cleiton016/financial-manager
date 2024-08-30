import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ButtonComponent } from "../../shared/components/buttons/button/button.component";

@Component({
  selector: 'fm-login',
  standalone: true,
  imports: [SharedModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
login($event: SubmitEvent) {
  console.log($event);
}

}
