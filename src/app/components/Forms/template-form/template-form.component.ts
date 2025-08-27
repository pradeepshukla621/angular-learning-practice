import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isTermAgree: false
  }

  onSave (userform: any) {
    // debugger
    // const formValue = this.userObj
    if (userform.invalid) {
      alert('Error: Please fill out all required fields correctly.');
      // Mark all fields as touched so that validation messages appear
      Object.keys(userform.controls).forEach(field => {
        const control = userform.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
      return;
    } else {
    const formValue = this.userObj
    // If the form is valid, proceed with saving data
    alert('Form submitted successfully!');
    console.log(this.userObj);
    }

  }
 }
