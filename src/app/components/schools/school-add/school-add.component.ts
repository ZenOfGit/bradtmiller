import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SchoolService } from '../../../core/services/school.service';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.css']
})

export class SchoolAddComponent {

  enteredName: '';
  enteredState: '';
  enteredDegree: '';
  enteredDescription: '';

  constructor(public schoolService: SchoolService) { }

  onAddSchool(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.schoolService.addSchool(form.value.name, form.value.state, form.value.degree, form.value.description);
    form.resetForm();
  }
}
