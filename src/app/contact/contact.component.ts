import { Component, OnInit } from '@angular/core';

export class Hero {

  constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
  ) {  }

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;


  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
        'Fetch any object at any distance',
        'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.model,"This is Submitted Info");
    //send information to service.

  }
  showFormControls(form: any) {
    return form && form.controls.name &&
        form.controls.name.value; // Dr. IQ
  }
  

}
