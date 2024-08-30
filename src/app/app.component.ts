import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "@pages/home/home.component";
import { AbstractComponent } from '@components/abstract/abstract.component';

@Component({
  selector: 'app-root', // eslint-disable-line
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends AbstractComponent {

}
