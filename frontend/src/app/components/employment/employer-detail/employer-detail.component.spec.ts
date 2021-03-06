import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployerDetailComponent } from './employer-detail.component';

describe('EmployerDetailComponent', () => {
  let component: EmployerDetailComponent;
  let fixture: ComponentFixture<EmployerDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
