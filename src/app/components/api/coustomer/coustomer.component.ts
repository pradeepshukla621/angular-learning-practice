import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-coustomer',
  standalone: false,
  templateUrl: './coustomer.component.html',
  styleUrl: './coustomer.component.scss'
})
export class CoustomerComponent {
  customerArray: any [] = [];

  customerObj: any = {
      "customerId": 0,
      "customerName": "",
      "customerCity": "",
      "mobileNo": "",
      "email": ""
  }

  constructor(private http: HttpClient, private customerService: CustomerService  ){
    this.getCustomers();
  }

  
  // getCustomers() {
  //   this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((response:any)=>{
  //     this.customerArray = response.data;
  //   })
  // }

  getCustomers() {
    this.customerService.loadCustomer().subscribe((response:any)=>{
      this.customerArray = response.data;
    })
  }

  // getCustomers() {
  //   this.customerService.loadCustomer().subscribe({
  //     next: (response: any) =>{
  //       this.customerArray = response?.data;
  //     },
  //     error: (error: any) =>{
  //       alert("No data found")
  //     }  
  //   })
  // }


  onSaveCustomer(){
    this.customerService.createNewCustomer(this.customerObj).subscribe((res:any) =>{
      if(res.result) {
        alert("Customer added successfully")
        this.getCustomers();
      } else {
        alert(res.message)
      }
    })
  }
}
