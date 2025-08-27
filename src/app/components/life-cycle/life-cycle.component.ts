import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes);
    //ngOnChanges most used in case input (3)
  }

  ngOnInit() {
    console.log('3. ngOnInit');
    //ngOnInit most used (1)
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit' , performance.now());
    // second most (2) used after   viewchild, getting refrence of element / third party library
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked');
  }

  ngOnDestroy() {
    alert("You are leaving the page")
    console.log('9. ngOnDestroy');
    // ngOnDestroy most used (4)
  }
}