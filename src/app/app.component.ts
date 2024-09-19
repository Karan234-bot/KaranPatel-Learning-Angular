import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import {Car} from "/Shared/Modules/user";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Car';
  Car1 : Car = {Brand: "BMW", CarName: "M4", Color: "Black", Model: "2023", Type: "Sedan"};
  Car2 : Car = {Brand: "Toyota", CarName: "Rav4", Model: "2003", Color: "Faded-Black",Type: "Suv"};

  Carlist: Car[] =
    [this.Car1, this.Car2,
      {Brand: "Maruti", CarName: "alto", Color: "White", Model: "2008", Type: "Mini-Suv"},
      {Brand: "Hyundai", CarName: "Verna", Color: "Black", Model: "2023", Type: "Sedan"},
      {Brand: "Tata", CarName: "Safari", Color: "GOld", Model: "2022", Type: "MPV"}];


  protected readonly Car = Car;
}

