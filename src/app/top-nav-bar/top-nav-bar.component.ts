import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public buttonClick(fragment: string): void {
    this.router.navigateByUrl( '#' + fragment);
  }
}
