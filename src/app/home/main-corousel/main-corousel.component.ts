import { ApplicationRef, Component } from '@angular/core';
import { homeCarouselData } from '../../../Data/mainCarousel';
import { first } from 'rxjs';

@Component({
  selector: 'app-main-corousel',
  templateUrl: './main-corousel.component.html',
  styleUrls: ['./main-corousel.component.scss']
})
export class MainCorouselComponent {
  carouselData : any;

  currentSlide = 0;
  interval: any;

  constructor(private applicationRef: ApplicationRef){}
  ngOnInit(){
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }
  autoPlay(){
    this.applicationRef.isStable.pipe(first((isStable: any) => isStable)).subscribe(() => {
      setInterval(() => { this.nextSlide()},2000) 
  
    });
  
  }
  nextSlide(){
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
