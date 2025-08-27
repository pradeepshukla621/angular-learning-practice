import { Component } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-ng-style',
  standalone: false,
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent {

  div1BgColor: string = '';
  isChecked: boolean = false;

  myCss: any = {
    'background-color': 'red',
    'width': '400px',
    'height': '200px'
  };

  addDiv1Color(color: string) {
    this.div1BgColor = color;
  }


}
