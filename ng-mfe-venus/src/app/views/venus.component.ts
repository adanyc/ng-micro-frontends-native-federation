import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-venus',
  standalone: true,
  templateUrl: './venus.component.html',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
})
export class VenusComponent { }
