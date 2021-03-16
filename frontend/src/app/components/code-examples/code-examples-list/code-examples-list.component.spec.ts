import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeExamplesListComponent } from './code-examples-list.component';

describe('CodeExamplesListComponent', () => {
  let component: CodeExamplesListComponent;
  let fixture: ComponentFixture<CodeExamplesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExamplesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExamplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
