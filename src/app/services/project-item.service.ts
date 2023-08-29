import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "src/app/models/project.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProjectItemService {

    constructor(private http: HttpClient) {

    }


    getProductsFilter(filter_input_1: string, filter_input_2: string, filter_input_3: string, filter_input_4: string): Observable<Project[]> {
        console.log(filter_input_1, filter_input_2, filter_input_3, filter_input_4, "<-test inputs");

        //parse filter inputs as an object.
        //switch to post.
            return this.http.get<Project[]>(environment.apiBaseUrl + "/filter/" + filter_input_1 + "/" + filter_input_2 + "/" + filter_input_3 + "/" + filter_input_4 + "/");

    }

    /* getProductsFilter(filter_input_1: string, filter_input_2: string, filter_input_3: string, filter_input_4: string): Observable<Project[]> {
        console.log(filter_input_1, filter_input_2, filter_input_3, filter_input_4, "<-test inputs");

        const requestBody = {
            filter_input_1,
            filter_input_2,
            filter_input_3,
            filter_input_4
        };

        // Configure the CORS headers
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://us-central1-portfolioapp-7f160.cloudfunctions.net/app', // Replace '*' with your backend domain in production
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            })
        };

        return this.http.post<Project[]>(environment.apiBaseUrl + '/filter', requestBody);
    }
    */

}


