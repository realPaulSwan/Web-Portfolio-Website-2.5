import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Subscription} from "rxjs";
import{FilterProjectListCommunicatorService} from "../../../services/filter-project-list-communicator.service";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss']
})
export class ProjectSearchComponent implements OnInit, OnDestroy{

  message: string[] = [];

  subscription: Subscription = new Subscription;

  ngOnInit(){
    this.subscription = this.filterProjectListCommunicatorService.currentMessage.subscribe(message => this.message = message);
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  tags_blank: string[] = ['','','',''];
  tagsFruits: string[] = ['Angular','AngularJS','C#','Coursera','CSS','HTML','Javascript', 'jQuery','NodeJS', 'PostgreSQL','TypeScript','Winforms','.NET'];
  projectList: Project[] = [];



  @ViewChild('fruitInput') tagInput: ElementRef<HTMLInputElement> | undefined;

  constructor(private filterProjectListCommunicatorService:FilterProjectListCommunicatorService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tags: string | null) => (tags ? this._filter(tags) : this.tagsFruits.slice())),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);

    // tags array Tests
    // console.log("add ran");
    //turn in to tag output object.



    this.filterProjectListCommunicatorService.changeMessage(this.tags);

    console.log("this fires");

  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    if(this.tagInput != undefined) {
      this.tagInput.nativeElement.value = '';
    }
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tagsFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  //Search
  thisClick(){

    this.filterProjectListCommunicatorService.changeMessage(this.tags);

  }
  //Show All
  thisClickRefresh(){

    this.filterProjectListCommunicatorService.changeMessage(this.tags_blank);
    this.tags = [];

  }
}
