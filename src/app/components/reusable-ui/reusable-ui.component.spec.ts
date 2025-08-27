import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableUiComponent } from './reusable-ui.component';

describe('ReusableUiComponent', () => {
  let component: ReusableUiComponent;
  let fixture: ComponentFixture<ReusableUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
