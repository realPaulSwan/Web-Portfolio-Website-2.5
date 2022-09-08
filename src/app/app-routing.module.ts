import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProjectsComponent } from './projects/projects.component';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectDetailsComponent} from "./projects/project-list/project-item/project-details/project-details.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'contacts', component: ContactComponent },
  { path: 'projectDetails/:name', component: ProjectDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
