import { SchoolService } from './../../../services/school.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/shared/models/school';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  @Input() school: School;

  constructor() { }

  ngOnInit(): void {
  }
}
