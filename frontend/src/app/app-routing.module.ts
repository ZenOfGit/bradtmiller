import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainViewComponent } from "./components/dashboard/main-view/main-view.component";
import { CodeExamplesListComponent } from "./components/code-examples/code-examples-list/code-examples-list.component";
import { EmployerDetailComponent } from "./components/employment/employer-detail/employer-detail.component";
import { EmployerListComponent } from "./components/employment/employer-list/employer-list.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SchoolDetailComponent } from "./components/education/school-detail/school-detail.component";
import { SchoolListComponent } from "./components/education/school-list/school-list.component";

const routes: Routes = [
  { path: "dashboard", component: MainViewComponent },
  { path: "", component: MainViewComponent },
  { path: "code-example-list", component: CodeExamplesListComponent },
  { path: "employer-list", component: EmployerListComponent },
  { path: "employer-detail", component: EmployerDetailComponent },
  { path: "employer-detail/:id", component: EmployerDetailComponent },
  { path: "school-list", component: SchoolListComponent },
  { path: "school-detail", component: SchoolDetailComponent },
  { path: "school-detail/:id", component: SchoolDetailComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
