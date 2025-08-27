import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-ui',
  standalone: false,
  templateUrl: './reusable-ui.component.html',
  styleUrl: './reusable-ui.component.scss'
})
export class ReusableUiComponent {

  studentList: any[] = [
    { studentId: 12, name: 'Aryan', city: 'Pune', progressValue: 70, isActive: false },
    { studentId: 22, name: 'Mohan', city: 'Noida', progressValue: 80, isActive: false },
    { studentId: 33, name: 'Kishan', city: 'Delhi', progressValue: 60, isActive: true },
    { studentId: 44, name: 'Rajan', city: 'Gujrat', progressValue: 40, isActive: false },
    { studentId: 55, name: 'Shyam', city: 'UP', progressValue: 50, isActive: false },
    { studentId: 66, name: 'Rani', city: 'MP', progressValue: 90, isActive: true }
  ]

}
