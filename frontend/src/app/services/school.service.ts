/* import { School } from './../shared/models/school'; */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { School } from "../shared/models/school";
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  getAllSchools(): Observable<School[]>{
    return this.http.get<School[]>("data/schools.json")
/*     return this.http.get("data/schools.json").pipe(
      map((data) => {
        const schoolsArray: Array<School> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            schoolsArray.push(data[id]);
          }
        }
        return schoolsArray;
      })
    ); */
    }

/*     getSchool(id: number): Observable<School[id]>{
      return this.http.get("data/schools.json").pipe(
        map((data =>{
          return data.find(school => {
            return school.id === id;
          });
        }),
        )
      );
    } */

/*     getSchool(id: number): Observable<School> {
      return this.getAllSchools().pipe(
      map(e => e.id === 'id'));
      return this.http.get("data/schools.json").pipe(
        map((data) => {
          const school: Array<School> = [];
          for (const id in data) {
            if (data.hasOwnProperty(id)) {
              school.push(data[id]);
            }
          }
          return school.find(e => e.id === 'id');
        })
      );
        const url = `'{/school-detail'/}${id}`;
        return this.http.get<School>(url).pipe(
          tap(_ => this.log(`fetched hero id=${id}`)),
          catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    } */
  }
