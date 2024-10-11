import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
// @ts-ignore
import {Car} from "/Shared/Modules/Car";
import {NgForOf, NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";
import {userList} from "./Shared/mockCar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Car';
  protected readonly CarListComponent = CarListComponent;
  protected readonly userList = userList;
}

