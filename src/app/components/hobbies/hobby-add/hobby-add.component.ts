import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HobbyService } from '../../../core/services/hobby.service';

@Component({
  selector: 'app-hobby-add',
  templateUrl: './hobby-add.component.html',
  styleUrls: ['./hobby-add.component.css']
})

export class HobbyAddComponent {

  enteredName: '';
  enteredSinceAge: '';
  enteredLevel: '';
  enteredDescription: '';

  constructor(public hobbyService: HobbyService) { }

  onAddHobby(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.hobbyService.addHobby(form.value.name, form.value.sinceAge, form.value.level, form.value.description);
    form.resetForm();
  }
}
