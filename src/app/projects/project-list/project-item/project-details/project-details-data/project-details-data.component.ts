import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../../models/project.model";

@Component({
  selector: 'app-project-details-data',
  templateUrl: './project-details-data.component.html',
  styleUrls: ['./project-details-data.component.scss']
})
export class ProjectDetailsDataComponent implements OnInit {

  @Input() projectItemDetails: Project = new Project();

  constructor() { }

  ngOnInit(): void {
  }

}
