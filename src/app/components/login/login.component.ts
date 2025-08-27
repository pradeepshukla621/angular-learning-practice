import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // Login ui part code start here 

  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  activateSignup() {
    this.containerRef.nativeElement.classList.add('right-panel-active');
  }

  activateLogin() {
    this.containerRef.nativeElement.classList.remove('right-panel-active');
  }

  // Login ui part code ends here 


  loginObj: any = {
    email: 'admin@gmail.com',
    password: 'Password@123'
  }

  router = inject(Router)
  http = inject(HttpClient)

  onLogin() {
    debugger
    if (this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "Password@123") {
      let userDetails = {
        email: this.loginObj.email,
        password: this.loginObj.password
      }
      localStorage.setItem("userDetails", JSON.stringify(userDetails))

      this.router.navigateByUrl("homepage")
    } else {
      alert("Please enter correct email and password")
    }


    // this.http.post("https:projectapi.grrasim.in/api/UserApp/login", this.loginObj).subscribe((res:any)=>{
    //   localStorage.setItem("userDetails", res.data.userID)
    //   this.router.navigateByUrl("homepage")
    // },error=>{
    //   alert("Please enter correct email and password")
    // })

  }

}
