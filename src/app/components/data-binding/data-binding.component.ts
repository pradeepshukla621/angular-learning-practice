import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  firstName: string = "Mohan";
  rollNo: number =  123;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  divClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor() {
    console.log(this.firstName)
    // this.showWelcomeMessage()
  }

  showWelcomeMessage(){
    alert("Welcome to Angular 19")
  }

  onChangeCity() {
    console.log("City Changed")
  }
}
