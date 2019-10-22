import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Employer } from '../../shared/models/employer';

@Injectable({
  providedIn: 'root'
})

export class EmployerService {


  private employers: Employer[] = [];
  private employersUpdated = new Subject<Employer[]>();

  constructor(private http: HttpClient) {}

  getEmployers() {
    this.http.get<{ message: string, employers: any}>('http://localhost:3000/api/employers')
      .pipe(map((employerData) => {
        return employerData.employers.map(employer => {
          return {
            id: employer._id,
            name: employer.name,
            city: employer.city,
            stateAbr: employer.stateAbr,
            title: employer.title,
            description: employer.description
          };
        });
    }))
    .subscribe((transformedEmployers) => {
      this.employers = transformedEmployers;
      this.employersUpdated.next([...this.employers]);
    });
  }

  getEmployerUpdateListener() {
    return this.employersUpdated.asObservable();
  }

// ADMIN
  addEmployer(name: string, city: string, stateAbr: string, title: string, description: string) {
    const employer: Employer = {id: null, name, city, stateAbr, title, description};
    this.http
      .post<{message: string, employerId: string }>('http://localhost:3000/api/employers', employer)
      .subscribe((responseData) => {
        const id = responseData.employerId;
        employer.id = id;
        this.employers.push(employer);
        this.employersUpdated.next([...this.employers]);
      });
}

// ADMIN
  deleteEmployer(employerId: string) {
    this.http.delete('http://localhost:3000/api/employers/' + employerId)
      .subscribe(() => {
        const updatedEmployers = this.employers.filter(employer => employer.id !== employerId);
        this.employers = updatedEmployers;
        this.employersUpdated.next([...this.employers]);
      });
  }
}
