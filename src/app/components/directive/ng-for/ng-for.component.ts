import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {

   //  *ngFor code start below

   cityArray: string[] = ['Pune', 'Noida', 'Delhi', 'Gujrat', 'UP', 'MP'];

   studentList: any[] = [
     { studentId: 12, name: 'Aryan', city: 'Pune', isActive: false },
     { studentId: 22, name: 'Mohan', city: 'Noida', isActive: false },
     { studentId: 33, name: 'Kishan', city: 'Delhi', isActive: true },
     { studentId: 44, name: 'Rajan', city: 'Gujrat', isActive: false },
     { studentId: 55, name: 'Shyam', city: 'UP', isActive: false },
     { studentId: 66, name: 'Rani', city: 'MP', isActive: true }
   ]

}
