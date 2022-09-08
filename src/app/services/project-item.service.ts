import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "src/app/models/project.model";


@Injectable({
  providedIn: 'root'
})
export class ProjectItemService {

    constructor(private http: HttpClient) {

    }


    getProductsFilter(filter_input_1: string, filter_input_2: string, filter_input_3: string, filter_input_4: string): Observable<Project[]> {
        console.log(filter_input_1, filter_input_2, filter_input_3, filter_input_4, "<-test inputs");

        return this.http.get<Project[]>("http://localhost:5000/filter/" + filter_input_1 + "/" + filter_input_2 + "/" + filter_input_3 + "/" + filter_input_4 + "/");
    }

}


