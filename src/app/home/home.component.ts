import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  selectedIndex = 0;

  ngOnInit(): void {
  }

  //https://www.geeksforgeeks.org/how-to-make-a-carousel-using-css/

  images = [
    {
      imageSrc:
          'assets/images/HomePage/12345.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
          'assets/images/HomePage/2015-12-21 17.23.38.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
          'assets/images/HomePage/20170830_151406.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
          'assets/images/HomePage/20150822_185412.jpg',
      imageAlt: 'person2',
    },
  ]
}
