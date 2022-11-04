
import {Component} from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-root',
  templateUrl: 'AppComponent.html',
  styleUrls: ['AppComponent.css'],
})
export class AppComponent {
  title = 'Web-Portfolio-Website';


  constructor(private router: Router) {
  }

  public buttonClick(fragment:string):void{
    this.router.navigateByUrl('#' + fragment);
  }


/*
  constructor(router: Router) {
    router.navigate(['home']);
  }
 */

}
//image carousel goes here

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
