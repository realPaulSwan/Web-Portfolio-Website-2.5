import {Injectable} from '@angular/core';
//import {ContactObjectModel} from 'src/app/models/contactObject.model'
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class ContactServiceService {

    constructor(private http: HttpClient) {
    }

    //sends data to NodeJS Server, which turns the data in to an email.

    sendContactData(name: string, feedback: string) {


        const data = {name_var: name, feedback_var: feedback}
        //console.log();
        //  const data = ContactObjectModel
        return this.http.post(environment.apiBaseUrl + '/api/email/', data,{responseType:'text'}).subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
                console.log("POST Request is not successful ", data);
            }
        );
        //console.log();


    }
}
