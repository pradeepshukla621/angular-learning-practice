import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: false,
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {


  constructor(private router: Router){}

  navigatetoHomepage() {
    this.router.navigateByUrl("/homepage")
  }
}
