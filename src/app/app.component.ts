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
    Car: string = 'M430i';
    Brand: string = 'BMW';
    Type: string = 'Sedan-Sport';
    Color: string = 'Matt Black';
    Year: string = '2023';
    Origin: string = 'German'
}
