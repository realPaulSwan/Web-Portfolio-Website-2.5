import {Component, Input, ViewChild, OnInit} from '@angular/core';
import {Project} from "../../../../../models/project.model";
import {ProjectCarouselComponent} from "./project-carousel/project-carousel.component";
import { AnimationType } from "./project-carousel/carousel.animations";


@Component({
  selector: 'app-project-details-data',
  templateUrl: './project-details-data.component.html',
  styleUrls: ['./project-details-data.component.scss']
})
export class ProjectDetailsDataComponent implements OnInit {

  //for carousel
  images = [
    {
      imageSrc:
          'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
          'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
          'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
          'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ]

  //......

  @Input() projectItemDetails: Project = new Project();

  @ViewChild(ProjectCarouselComponent) carousel: ProjectCarouselComponent;

  animationType = AnimationType.Scale;

  setvar(){
    //make sure link is loaded before log?

  }

  ngOnInit(): void {


  }

  openRepo() {
    var gitUrl = "https://github.com/realPaulSwan/" + this.projectItemDetails.git_url;
    window.open(gitUrl, "_blank");
    console.log("testlogs",this.projectItemDetails.git_url)
  }

  constructor() { }

}
