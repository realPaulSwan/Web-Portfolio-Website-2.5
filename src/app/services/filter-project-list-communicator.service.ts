import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterProjectListCommunicatorService {

  FilterProjectList_Array: string[] = ['','Test1','Test2','Test3'];
  private messageSource = new BehaviorSubject(this.FilterProjectList_Array);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string[]) {
    this.messageSource.next(message);
  }
}
