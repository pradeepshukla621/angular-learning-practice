import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  standalone: false,
  templateUrl: './progres-bar.component.html',
  styleUrl: './progres-bar.component.scss'
})
export class ProgresBarComponent {

  @Input() progressValue: number = 0;
}
