import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployerService } from '../../../core/services/employer.service';

@Component({
  selector: 'app-employer-add',
  templateUrl: './employer-add.component.html',
  styleUrls: ['./employer-add.component.css']
})

export class EmployerAddComponent {

  enteredName: '';
  enteredCity: '';
  enteredStateAbr: '';
  enteredTitle: '';
  enteredDescription: '';

  constructor(public employerService: EmployerService) { }

  onAddEmployer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employerService.addEmployer(form.value.name, form.value.city, form.value.stateAbr, form.value.title, form.value.description);
    form.resetForm();
  }
}
