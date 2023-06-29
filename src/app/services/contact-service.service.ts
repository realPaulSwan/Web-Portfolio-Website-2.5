import {Injectable} from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";




@Injectable({
    providedIn: 'root'
})
export class ContactServiceService {

    constructor(private http: HttpClient) {
    }

    //sends data to NodeJS Server, which turns the data in to an email.

    sendContactData(name: string, feedback: string) {


        const data = {email_var: name, feedback_var: feedback}
        return this.http.post(environment.apiBaseUrl + '/api/email/', data,{responseType:'text'}).subscribe(
            data => {
                //console.log("POST Request is successful ", data);
            },
            error => {
                //console.log("Error", error);
                //console.log("POST Request is not successful ", data);
            }
        );
    }
}
