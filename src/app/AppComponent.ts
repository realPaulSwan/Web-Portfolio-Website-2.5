
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
  constructor(router: Router) {
    router.navigate(['home']);
  }

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
