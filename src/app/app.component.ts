import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // eslint-disable-line
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
