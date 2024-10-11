import {Component, Input} from '@angular/core';
import {car} from "../Shared/Modules/Car"
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgForOf, NgClass, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  car1 : car = {isGasFull: false, Brand: "BMW", CarName: "M4", Color: "Black", Model: "2023", Type: "Sedan", picture:"assets/bmw.jpg"};
  car2 : car = {isGasFull: false, Brand: "Toyota", CarName: "Rav4", Model: "2003", Color: "Faded-Black",Type: "Suv", picture:"assets/rav4.jpg"};

  Carlist: car[] = [this.car1, this.car2,];
  constructor() {}
  getcar(): Observable<car[]> {
    return of(this.Carlist);
  }
  addcar(newCar: car) : Observable<car> {
    this.Carlist.push(newCar)
    // @ts-ignore
    return of(this.Carlist);
  }
  // @ts-ignore
  updateCar(newCar: car) : Observable<car> {
    const index = this.Carlist.findIndex(newCar => newCar.Brand === newCar.Brand);
    if (index > -1) {
      this.Carlist[index].CarName = newCar.CarName;
    }
  }
  // @ts-ignore
  deletecar(newCar: number) : Observable<car[]> {
    this.Carlist = this.Carlist.filter(newCar => newCar.Brand === newCar.Brand);
    return of(this.Carlist);
  }
  // @ts-ignore
  getcarById(newCar: number) : Observable<car | undefined> {
    const Car = this.Carlist.findIndex(newCar =>newCar.Brand === newCar.Brand);
  }
}
