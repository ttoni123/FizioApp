import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule]
})
export class HeroComponent {
  images = [
    { src: 'assets/images.jpg', alt: 'C:\\Users\\tonib\\fizioApp\\fizioApp\\src\\assets\\images.jpg'},
    { src: 'assets/physical-therapy.jpg', alt: 'noalt'}
  ];

  currentIndex: number = 0;

  ngOnInit() {
    console.log(this.images);  // This will log the images array when the component is initialized
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

export default HeroComponent