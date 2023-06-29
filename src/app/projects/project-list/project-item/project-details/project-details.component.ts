import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {Project} from "../../../../models/project.model";
import {ProjectDetailService} from "../../../../services/project-detail.service";

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

    name = '';
    id = 0;

    projectList: Project[] = [];
    message: string[] = [];
    subscription: Subscription = new Subscription();

    constructor(private route: ActivatedRoute, private projectDetailService: ProjectDetailService) {
    }

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;

        this.myObservable.subscribe((val) => {
            this.loadProject(this.name);
        })
    }

    loadProject(name: string) {

        this.projectDetailService.getProjects("name", name).subscribe((projects) => {
            this.projectList[0] = projects[0];
            console.log(projects, this.name, "DetailsProjList2");

        });

        console.log(this.projectList, this.name, "DetailsProjList");

    }


    myObservable = new Observable((observer) => {

        // Debugging the observable.
        /*if(this.projectList[0] != undefined){

          console.log("OBSERVABLEACTIVE")
        }*/

        //receives message from service to indicate the data has been loaded so it can be displayed.
        observer.next(this.projectList);
    })
}
