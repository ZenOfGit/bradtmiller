import { HttpClient } from '@angular/common/http';
import { EmployerService } from './../../../services/employer.service';
import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/shared/models/employer';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employers: Array<Employer>; //Array<Employer>;
  selectedEmployer: Employer;

  constructor(private EmployerService: EmployerService, private http: HttpClient) { }

  ngOnInit(): void {
    this.EmployerService.getAllEmployers().subscribe(
      data => {
        this.employers = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  onSelectEmployer(employer: Employer) {
    this.selectedEmployer = employer;
  }
}
