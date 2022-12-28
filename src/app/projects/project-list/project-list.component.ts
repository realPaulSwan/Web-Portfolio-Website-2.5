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

  //messageOld:string = "";

  subscription: Subscription = new Subscription();


  //make sure to be projects?
  //here is the last possible place
  //top line works on HTML
  projectList: Project[] = [];


  constructor(
      private projectItemService: ProjectItemService,
      private filterProjectListCommunicatorService: FilterProjectListCommunicatorService
  ) { }




  /*obsValue = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => {
      console.log("Returns value");
      this.subscription = this.filterProjectListCommunicatorService.currentMessage.subscribe(message => this.message = message);
      this.loadProjects("Angular","","","");
      observer.next("1000")
    }, 5000);
  }).pipe(shareReplay());
*/

  myObservable = new Observable((observer) =>{
    this.subscription = this.filterProjectListCommunicatorService.currentMessage.subscribe(message =>{
      this.message = message;
      console.log(this.message,"<-the message MYOBSERVALE");
      observer.next(this.message);
    });
  })

  ngOnInit(){

    //put in observavle
    this.myObservable.subscribe((val) =>{
      this.loadProjects(this.message[0],this.message[1],this.message[2],this.message[3]);
      console.log(this.message," Observable from NgOnit Proj list");
    })

//*ngIf(this.message == this.messageOld)

    console.log(this.message,"<-the message from NGONIT");

    this.loadProjects("","","Tes","");

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
        //this.loadProjects("","","","");
      }
    })
  }

  Output(){
    console.log(this.message,"<-the message");
  }

}
