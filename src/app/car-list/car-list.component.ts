import {Component, Input} from '@angular/core';
import {Car} from "../Shared/Modules/Car"
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgForOf, NgClass, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  Car1 : Car = {Brand: "BMW", CarName: "M4", Color: "Black", Model: "2023", Type: "Sedan"};
  Car2 : Car = {Brand: "Toyota", CarName: "Rav4", Model: "2003", Color: "Faded-Black",Type: "Suv"};

  Carlist: Car[] = [this.Car1, this.Car2,]
}
