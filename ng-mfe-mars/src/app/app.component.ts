import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { connectRouter } from './micro-frontend/connect-router';

@Component({
  selector: 'mfe-mars',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    connectRouter();
  }
}
