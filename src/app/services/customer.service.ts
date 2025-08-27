import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/'

  constructor(private http: HttpClient) { }

  loadCustomer(){
    return this.http.get(this.apiUrl + `CarRentalApp/GetCustomers`);
  }

  createNewCustomer(data: any) {
    return this.http.post(this.apiUrl + `CreateNewCustomer`, data)
  }
}
