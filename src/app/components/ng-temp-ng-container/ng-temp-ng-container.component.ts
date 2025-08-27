import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  standalone: false,
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.scss'
})
export class NgTempNgContainerComponent {


   studentList: any[] = [
     { studentId: 12, name: 'Aryan', city: 'Pune', isActive: true },
     { studentId: 22, name: 'Mohan', city: 'Noida', isActive: false },
     { studentId: 33, name: 'Kishan', city: 'Delhi', isActive: true },
     { studentId: 44, name: 'Rajan', city: 'Gujrat', isActive: false },
     { studentId: 55, name: 'Shyam', city: 'UP', isActive: false },
     { studentId: 66, name: 'Rani', city: 'MP', isActive: true }
   ]

   isLoader: boolean = true

   constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000);
   }
}
