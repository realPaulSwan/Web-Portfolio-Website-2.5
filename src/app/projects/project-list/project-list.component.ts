import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Project} from "../../models/project.model";
import {ProjectItemService} from "../../services/project-item.service";
import {FilterProjectListCommunicatorService} from "../../services/filter-project-list-communicator.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  firstload: boolean = true;

  message:string[] = [];

  subscription: Subscription = new Subscription();

  projectList: Project[] = [];


  constructor(
      private projectItemService: ProjectItemService,
      private filterProjectListCommunicatorService: FilterProjectListCommunicatorService
  ) { }

  myObservable = new Observable((observer) =>{
    this.subscription = this.filterProjectListCommunicatorService.currentMessage.subscribe(message =>{
      this.message = message;
      console.log(this.message,"<-the message MYOBSERVALE");
      observer.next(this.message);
    });
  })

  ngOnInit(){
    let firstloadcomplete = 0;

    this.myObservable.subscribe((val) =>{
      if(firstloadcomplete == 1) {
        this.loadProjects(this.message[0], this.message[1], this.message[2], this.message[3]);
      }
      firstloadcomplete = 1;
      console.log(this.message," Observable from NgOnit Proj list");
    })

    console.log(this.message,"<-the message from NGONIT");

    this.loadProjects("displayall","undefined","undefined","undefined");
    console.log(firstloadcomplete,"<-firstloadcomplete");

  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadProjects(filter1: string,filter2: string,filter3: string,filter4: string){
    this.projectItemService.getProductsFilter(filter1,filter2,filter3,filter4).subscribe((projects) =>{
      this.projectList = projects;
      console.log(projects,"<-the projects message");

      if(this.projectList.length == 0){
        console.log("no projects");
        !this.firstload;
      }
    })
  }

  Output(){
    console.log(this.message,"<-the message");
  }

}
