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
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  fruits_blank: string[] = ['','','',''];
  allFruits: string[] = ['Angular','AngularJS','C#','Coursera','CSS','HTML','Javascript', 'jQuery','NodeJS', 'PostgreSQL','TypeScript','Winforms','.NET'];
  projectList: Project[] = [];



  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;

  constructor(private filterProjectListCommunicatorService:FilterProjectListCommunicatorService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);

    // fruits array Tests
    // console.log("add ran");
    // console.log(this.fruits,"<---fruitList");
    // console.log(this.fruits[0],"<-Fruits1");
    // console.log(this.fruits[1],"<-Fruits2");
    //console.log(this.fruits[2],"<-Fruits3");
    //turn in to fruit output object.



    this.filterProjectListCommunicatorService.changeMessage(this.fruits);

    console.log("this fires");

  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    if(this.fruitInput != undefined) {
      this.fruitInput.nativeElement.value = '';
    }
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  //Search
  thisClick(){

    this.filterProjectListCommunicatorService.changeMessage(this.fruits);

  }
  //Show All
  thisClickRefresh(){

    this.filterProjectListCommunicatorService.changeMessage(this.fruits_blank);
    this.fruits = [];

  }
}
