import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mars',
  standalone: true,
  templateUrl: './mars.component.html',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
})
export class MarsComponent { }
