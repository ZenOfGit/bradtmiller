import { SchoolService } from './../../../services/school.service';
import { Router } from '@angular/router';
import { School } from './../../../shared/models/school';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent implements OnInit {

  @Input() school: School;
  selectedSchool: School;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getSchool() {
    this.router.navigate(['/school-detail', this.school.id]);
  }

  onSelectSchool(school: School) {
    this.selectedSchool = this.school;
  }

}
