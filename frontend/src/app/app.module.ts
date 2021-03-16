import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployerListComponent } from './components/employment/employer-list/employer-list.component';
import { EmployerCardComponent } from './components/employment/employer-card/employer-card.component';
import { EmployerDetailComponent } from './components/employment/employer-detail/employer-detail.component';
import { SchoolListComponent } from './components/education/school-list/school-list.component';
import { SchoolCardComponent } from './components/education/school-card/school-card.component';
import { SchoolDetailComponent } from './components/education/school-detail/school-detail.component';

import { EmployerService } from './services/employer.service';
import { SchoolService } from './services/school.service';
import { MainViewComponent } from './components/dashboard/main-view/main-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CodeExamplesListComponent } from './components/code-examples/code-examples-list/code-examples-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployerListComponent,
    EmployerCardComponent,
    EmployerDetailComponent,
    SchoolListComponent,
    SchoolCardComponent,
    SchoolDetailComponent,
    MainViewComponent,
    NotFoundComponent,
    CodeExamplesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    EmployerService,
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
