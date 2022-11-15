import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Project} from "src/app/models/project.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {


  constructor(private http: HttpClient) { }



  getProjects(dataType: string, localKey: string): Observable<Project[]> {

    return this.http.get<Project[]>(environment.apiBaseUrl + "/filter/?" + dataType + "=" + localKey);
    //indicate data return with message

  }



}
