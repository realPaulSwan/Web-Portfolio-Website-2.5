import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  title = 'carousel';



  @Input() images: { imageSrc: string; imageAlt: string }[] = []
  @Input() indicators = true;
  @Input() controls = true;
  selectedIndex = 0;


  constructor() { }

  ngOnInit(): void {
  }

  //sets index
  selectImage(index: number): void{
    this.selectedIndex = index;

  }
  onPrevClick():void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
