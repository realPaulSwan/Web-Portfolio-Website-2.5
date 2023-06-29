import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from "../../../models/project.model";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit{

  @Input() projectItemTWO: Project = new Project();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  thatClick() {
    this.router.navigateByUrl('/projectDetails/'+ this.projectItemTWO.name)
  }
}
