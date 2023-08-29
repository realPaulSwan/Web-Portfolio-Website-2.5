import {Component, OnInit} from '@angular/core';
import {ContactServiceService} from "../services/contact-service.service";


export class Hero {

    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {
    }

}


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    //recaptcha code
    captcha: string;                                // empty = not yet proven to be a human, anything else = human
    email: string;


    powers = [];
    model = new Hero(18, '', this.powers[0], '');

    submitted = false;

    constructor(private contactServiceService: ContactServiceService) {
        this.captcha = '';
        this.email = 'Secret@email.com';

    }

    ngOnInit(): void {
        //recaptcha validation
    }

    resolved(captchaResponse: string) {
        this.captcha = captchaResponse;
        console.log('resolved captcha with response: ' + this.captcha);
    }


    onSubmit() {
        this.submitted = true;
        let SendText: string = "";
        if (this.model.alterEgo != undefined) {
            SendText = this.model.alterEgo;
            this.contactServiceService.sendContactData(this.model.name, SendText);
        } else {
            this.contactServiceService.sendContactData(this.model.name, "Undefinedtest");
        }



        console.log(this.model, SendText);


    }
}
