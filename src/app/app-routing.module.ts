import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EmployerAddComponent } from './components/employers/employer-add/employer-add.component';
import { EmployerListComponent } from './components/employers/employer-list/employer-list.component';
import { HobbyAddComponent } from './components/hobbies/hobby-add/hobby-add.component';
import { HobbyListComponent } from './components/hobbies/hobby-list/hobby-list.component';
import { SchoolAddComponent } from './components/schools/school-add/school-add.component';
import { SchoolListComponent } from './components/schools/school-list/school-list.component';

export const routeConfig: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'school-add',
    component: SchoolAddComponent
  },
  {
    path: 'schools',
    component: SchoolListComponent
  },
  {
    path: 'employer-add',
    component: EmployerAddComponent
  },
  {
    path: 'employers',
    component: EmployerListComponent
  },
  {
    path: 'hobby-add',
    component: HobbyAddComponent
  },
  {
    path: 'hobbies',
    component: HobbyListComponent
  },
  {
      path: '**',
      component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
