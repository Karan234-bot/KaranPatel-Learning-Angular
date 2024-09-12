import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'KaranPatel-LearningAngular';
    movie: string = 'Chak de India';
    phone: string = 'Iphone 16 pro';
}
