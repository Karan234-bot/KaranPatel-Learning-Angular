import {Component, Input, input} from '@angular/core';
import {NgIf} from "@angular/common";
import {car} from "../Shared/Modules/Car";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent{
  // @ts-ignore
  @Input() car!: car;

}
