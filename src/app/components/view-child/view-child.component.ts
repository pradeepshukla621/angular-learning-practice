import { Component, ElementRef, ViewChild } from '@angular/core';
import { ResourceApiComponent } from '../resource-api/resource-api.component';

@Component({
  selector: 'app-view-child',
  standalone: false,
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent {

  @ViewChild('txtCity') cityTextbox: ElementRef | undefined;

  @ViewChild(ResourceApiComponent) myResourceApiViewChild: ResourceApiComponent | undefined;

  readCity() {
    debugger
    const city  = this.cityTextbox?.nativeElement.value;
    if(this.cityTextbox) {
      this.cityTextbox.nativeElement.style.color = "red";
    }
    const val = this.myResourceApiViewChild?.userList;
  }

}
