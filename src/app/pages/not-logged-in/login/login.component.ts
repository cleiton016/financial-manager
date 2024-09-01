import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from "../../../shared/components/buttons/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'fm-login',
  standalone: true,
  imports: [SharedModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  route = inject(Router);
  login() {
    console.log('login method');
    
    this.route.navigate(['/customer-area']);
  }
}
