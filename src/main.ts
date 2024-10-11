import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import{provideRouter, Routes} from "@angular/router";
import {CarListComponent} from "./app/car-list/car-list.component";
import {CarListItemComponent} from "./app/car-list-item/car-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/userList', pathMatch: 'full'}, //default route
  { path: 'userList', component: CarListComponent },
  { path: 'userList/:CarName', component: CarListItemComponent },
  {path:'modify-list-item', component: ModifyListItemComponent },
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent,{providers:[provideRouter(routes)]}).then(r=>console.log("Succesfull"));
