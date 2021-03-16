import { SchoolService } from './../../../services/school.service';
import { School } from './../../../shared/models/school';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: Array<School>;
  selectedSchool: School;

  constructor(private SchoolService: SchoolService) { }

  ngOnInit(): void {
    this.SchoolService.getAllSchools().subscribe(
      data => {
        this.schools = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  onSelectSchool(school: School) {
    this.selectedSchool = school;
  }
}
