import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employer } from "../shared/models/employer";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployerService {
  constructor(private http: HttpClient) {}

  getAllEmployers() {
    /*     return this.http.get("data/employers.json"); */

    return this.http.get("data/employers.json").pipe(
      map((data) => {
        const employersArray: Array<Employer> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            employersArray.push(data[id]);
          }
        }
        return employersArray;
      })
    );
  }

  getEmployer(id: number) {
    return this.http.get("data/employers.json").pipe(
      map((data) => {
        const employer: Array<Employer> = [];
        if (data.hasOwnProperty(id)) {
          employer.push(data[id]);
        }
        return employer;
      })
    );
  }
}
