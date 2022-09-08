import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "src/app/models/project.model";


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {


  constructor(private http: HttpClient) { }

  getProjects(dataType: string, localKey: string): Observable<Project[]> {

    return this.http.get<Project[]>("http://localhost:5000/filter/?" + dataType + "=" + localKey);
  }

}
