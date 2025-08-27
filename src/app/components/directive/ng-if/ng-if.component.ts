import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIFComponent {

   isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  showDiv1() {
    this.isDiv1Visible = true;
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }


  toggleDiv2() {
    // this.isDiv2Visible = !this.isDiv2Visible;
    if (this.isDiv2Visible == true) {
      this.isDiv2Visible = false;
    } else {
      this.isDiv2Visible = true
    }
  }


  // div 3 code 
  num1: string = '';
  num2: string = '';

  
  // div 4 code  
  isActive: boolean = false;
  selectedState: string = '';


}
