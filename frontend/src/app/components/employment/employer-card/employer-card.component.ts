import { Employer } from 'src/app/shared/models/employer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employer-card',
  templateUrl: './employer-card.component.html',
  styleUrls: ['./employer-card.component.css']
})
export class EmployerCardComponent implements OnInit {

  @Input() employer: Employer;

  constructor() { }

  ngOnInit(): void {
  }

}
