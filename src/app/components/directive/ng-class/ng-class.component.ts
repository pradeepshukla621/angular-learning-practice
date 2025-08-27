import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: false,
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {

  divBgColor: string = "bg-success";
  isChecked: Boolean = false;
  div3ClassName: string = '';

  addDiv1Color( className: string) {
    this.divBgColor = className;
  }
}
