import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { School } from '../../shared/models/school';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {

  private schools: School[] = [];
  private schoolsUpdated = new Subject<School[]>();

  constructor(private http: HttpClient) {}

  getSchools() {
    this.http.get<{ message: string, schools: any}>('http://localhost:3000/api/schools')
      .pipe(map((schoolData) => {
        return schoolData.schools.map(school => {
          return {
            id: school._id,
            name:  school.name,
            state: school.state,
            degree: school.degree,
            description: school.description
          };
        });
    }))
    .subscribe((transformedSchools) => {
      this.schools = transformedSchools;
      this.schoolsUpdated.next([...this.schools]);
    });
  }

  getSchoolUpdateListener() {
    return this.schoolsUpdated.asObservable();
  }

// ADMIN
  addSchool(name: string, state: string, degree: string, description: string) {
    const school: School = {id: null, name, state, degree, description};
    this.http
      .post<{message: string, schoolId: string }>('http://localhost:3000/api/schools', school)
      .subscribe((responseData) => {
        const id = responseData.schoolId;
        school.id = id;
        this.schools.push(school);
        this.schoolsUpdated.next([...this.schools]);
      });
}

// ADMIN
  deleteSchool(schoolId: string) {
    this.http.delete('http://localhost:3000/api/schools/' + schoolId)
      .subscribe(() => {
        const updatedSchools = this.schools.filter(school => school.id !== schoolId);
        this.schools = updatedSchools;
        this.schoolsUpdated.next([...this.schools]);
      });
  }
}
