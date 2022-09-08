import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {Project} from "../../../models/project.model";




@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit{

  @Input() projectItemTWO: Project = new Project();


  //let ChipInserterActivated:boolean = true;

  //ChipInserterActivated:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    //console.log(Project, "<-project-Item Project");

    //console.log(this.projectItemTWO.tags[3], "<-project-itemTwo this.projectItem")
    //if (this.projectItemTWO.tags[3] == "") {
    //  console.log("Blank DETECTED")
    //}

  }
  thatClick() {
    this.router.navigateByUrl('/projectDetails/'+ this.projectItemTWO.name);
  }
}
