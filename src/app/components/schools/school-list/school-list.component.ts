import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolService } from '../../../core/services/school.service';
import { Observable, Subscription } from 'rxjs';

import { School } from '../../../shared/models/school';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})

export class SchoolListComponent implements OnInit, OnDestroy {

schools: School[] = [];
private schoolsSub: Subscription;

  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
    this.schoolService.getSchools();
    this.schoolsSub = this.schoolService.getSchoolUpdateListener().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

// ADMIN
onDelete(schoolId: string) {
  this.schoolService.deleteSchool(schoolId);
}

  ngOnDestroy() {
    this.schoolsSub.unsubscribe();
  }
}
