import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//import {FilterProjectListCommunicatorService} from "../../../../services/filter-project-list-communicator.service";
import {Observable, Subscription} from "rxjs";
import {Project} from "../../../../models/project.model";
import{ProjectDetailService} from "../../../../services/project-detail.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  name = '';

  projectList: Project[] = [];
  message:string[] = [];
  subscription: Subscription = new Subscription();

  constructor(private route:ActivatedRoute, private projectDetailService: ProjectDetailService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;

    this.loadProject(this.name);

  }

  loadProject(name:string){

  this.projectDetailService.getProjects("name",name).subscribe((projects) =>{
     this.projectList[1] = projects[1];
    console.log(projects, this.name, "DetailsProjList2");

   });

  console.log(this.projectList, this.name, "DetailsProjList");

  }


  myObservable = new Observable((observer) =>{


  })




//if projectRequest is equal to Null say page not found
  //get info from server by name which is passed.



}
