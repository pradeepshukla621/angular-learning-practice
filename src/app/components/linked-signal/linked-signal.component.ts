import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: false,
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {

  firstName = signal("Shyam");
  lastName = signal("Singh");

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions,previous) => {
      const fullName = newOptions + " " + this.lastName()
      return fullName;
    } 
  })

  changeName() {
    this.firstName.set("Rahul");
  }


  user = signal({id: 111, name: "Shyam"});

  email = linkedSignal({
    source:this.user,
    computation: user => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b:any) => a.id !== b.id
  })

 changeId() {
  this.user.set({id:123,name: "Shyam"})
 }  
}
