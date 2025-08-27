import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: false,
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      locations: this.fb.array([]),
    });

    this.addLocation(); // Add first location on load
  }

  get locations(): FormArray {
    return this.form.get('locations') as FormArray;
  }

  newLocationGroup(): FormGroup {
    return this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      village: ['', Validators.required],
    });
  }

  addLocation(): void {
    const lastGroup = this.locations.at(this.locations.length - 1);
    if (lastGroup && lastGroup.invalid) {
      lastGroup.markAllAsTouched();
      return;
    }
    this.locations.push(this.newLocationGroup());
  }

  removeLocation(index: number): void {
    this.locations.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert("Form Submitted Successfully")
      console.log('Submitted:', this.form.value);
    } else {
      this.locations.controls.forEach(group => group.markAllAsTouched());
    }
  }

  resetArray() {
    this.form.reset()
  }
}
  