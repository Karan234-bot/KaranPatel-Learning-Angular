//mockStudent.data.ts
//import the interface
import {car} from './Modules/Car';

//Create a mock data array of type User and export so it is
//available to other files

export const userList: car[] = [
  {isGasFull: false, Brand: "BMW", CarName: "M4", Color: "Black", Model: "2023", Type: "Sedan"},
  {isGasFull: true, Brand: "Toyota", CarName: "Rav4", Model: "2003", Color: "Faded-Black",Type: "Suv"}
//Add more as needed
];
