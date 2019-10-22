import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployerService } from '../../../core/services/employer.service';
import { Observable, Subscription } from 'rxjs';

import { Employer } from '../../../shared/models/employer';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})

export class EmployerListComponent implements OnInit, OnDestroy {

  employers: Employer[] = [];
  private employersSub: Subscription;

  constructor(private employerService: EmployerService) {}

  ngOnInit() {
    this.employerService.getEmployers();
    this.employersSub = this.employerService
      .getEmployerUpdateListener()
      .subscribe((employers: Employer[]) => {
        this.employers = employers;
      });
  }

  // ADMIN
  onDelete(employerId: string) {
    this.employerService.deleteEmployer(employerId);
  }

  ngOnDestroy() {
    this.employersSub.unsubscribe();
  }
}
