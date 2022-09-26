import {Component, Input, ViewChild, OnInit} from '@angular/core';
import {Project} from "../../../../../models/project.model";
import {ProjectCarouselComponent} from "./project-carousel/project-carousel.component";
import { Slide } from "./project-carousel/carousel.interface";
import { AnimationType } from "./project-carousel/carousel.animations";


@Component({
  selector: 'app-project-details-data',
  templateUrl: './project-details-data.component.html',
  styleUrls: ['./project-details-data.component.scss']
})
export class ProjectDetailsDataComponent implements OnInit {

  @Input() projectItemDetails: Project = new Project();

  @ViewChild(ProjectCarouselComponent) carousel: ProjectCarouselComponent;

  animationType = AnimationType.Scale;

  setvar(){
    //make sure link is loaded before log?
    let GitUrl = this.projectItemDetails.githubUrl;
  }

  ngOnInit(): void {
    console.log(this.projectItemDetails.githubUrl, "url")
  }

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];

  //pass in the slides from data.
  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
          "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "Miouw",
      src:
          "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "In The Wilderness",
      src:
          "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
    },
    {
      headline: "Focus On The Writing",
      src:
          "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  constructor() { }


  setAnimationType(type: { value: AnimationType; }) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
