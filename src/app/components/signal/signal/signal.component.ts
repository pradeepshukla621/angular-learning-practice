import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: false,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // this will stop angular to detect chenges and changes detect on signal method
})
export class SignalComponent {

  firstName = signal("Shyam");

  lastName = signal<string>("Singh");

  courseName: string = "Angular";
  
  rollNo = signal<number>(0);

  constructor(){
    const value = this.firstName();

    setTimeout(() => {
      this.courseName = "React Js";
      this.firstName.set("Raju")
    }, 5000)
  }

  onIncrement() {
    this.rollNo.update(oldValue => oldValue+1)
  }

}
