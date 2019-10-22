import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatToolbarModule
        } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavIconsComponent } from './components/nav-icons/nav-icons.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EmployerAddComponent } from './components/employers/employer-add/employer-add.component';
import { EmployerListComponent } from './components/employers/employer-list/employer-list.component';
import { HobbyAddComponent } from './components/hobbies/hobby-add/hobby-add.component';
import { HobbyListComponent } from './components/hobbies/hobby-list/hobby-list.component';
import { SchoolAddComponent } from './components/schools/school-add/school-add.component';
import { SchoolListComponent } from './components/schools/school-list/school-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavIconsComponent,
    PageNotFoundComponent,

    EmployerAddComponent,
    EmployerListComponent,
    HobbyAddComponent,
    HobbyListComponent,
    SchoolAddComponent,
    SchoolListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
