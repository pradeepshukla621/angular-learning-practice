import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  courseName: string = "Angular";

  currentDate: Date = new Date();

  studentObj: any = {
    name:  'Chetan',
    city: 'Pune',
    mobile: '0987654321'
  }

  cityArray: string[] = ['Pune', 'Noida', 'Delhi', 'Gujrat', 'UP', 'MP'];

   studentList: any[] = [
     { studentId: 12,  city: 'Pune', isActive: false },
     { studentId: 22, name: 'Mohan', city: 'Noida', isActive: false },
     { studentId: 33, name: 'Kishan', city: 'Delhi', isActive: true },
     { studentId: 44, name: '', city: 'Gujrat', isActive: false },
     { studentId: 55, name: 'Shyam', city: 'UP', isActive: false },
     { studentId: 66, name: null, city: 'MP', isActive: true }
   ]
}
