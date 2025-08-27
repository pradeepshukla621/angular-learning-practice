import { Component } from '@angular/core';
import { Car, ICarList } from '../../model/car';

@Component({
  selector: 'app-class-interface',
  standalone: false,
  templateUrl: './class-interface.component.html',
  styleUrl: './class-interface.component.scss'
})
export class ClassInterfaceComponent {
  carList: ICarList [] = [];

  carObj: Car = new Car();

}
