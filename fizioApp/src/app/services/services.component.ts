import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule]
})
export class ServicesComponent implements OnInit {
  services = [
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 1',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nulla feugiat nisi; tortor elit parturient rutrum. Facilisi sem blandit hendrerit dignissim ante cursus ullamcorper fringilla sociosqu. Scelerisque justo lectus nam accumsan, sodales class conubia. Nostra torquent non maximus velit nascetur cras. Vel rhoncus ultrices semper; ligula netus posuere feugiat. Quam nec auctor netus ligula semper? Potenti dapibus nisi suscipit neque feugiat condimentum pulvinar.'
    },
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 2',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nulla feugiat nisi; tortor elit parturient rutrum. Facilisi sem blandit hendrerit dignissim ante cursus ullamcorper fringilla sociosqu. Scelerisque justo lectus nam accumsan, sodales class conubia. Nostra torquent non maximus velit nascetur cras. Vel rhoncus ultrices semper; ligula netus posuere feugiat. Quam nec auctor netus ligula semper? Potenti dapibus nisi suscipit neque feugiat condimentum pulvinar.'
    },
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 3',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nulla feugiat nisi; tortor elit parturient rutrum. Facilisi sem blandit hendrerit dignissim ante cursus ullamcorper fringilla sociosqu. Scelerisque justo lectus nam accumsan, sodales class conubia. Nostra torquent non maximus velit nascetur cras. Vel rhoncus ultrices semper; ligula netus posuere feugiat. Quam nec auctor netus ligula semper? Potenti dapibus nisi suscipit neque feugiat condimentum pulvinar.'
    },
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 4',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nulla feugiat nisi; tortor elit parturient rutrum. Facilisi sem blandit hendrerit dignissim ante cursus ullamcorper fringilla sociosqu. Scelerisque justo lectus nam accumsan, sodales class conubia. Nostra torquent non maximus velit nascetur cras. Vel rhoncus ultrices semper; ligula netus posuere feugiat. Quam nec auctor netus ligula semper? Potenti dapibus nisi suscipit neque feugiat condimentum pulvinar.'
    },
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 5',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nulla feugiat nisi; tortor elit parturient rutrum. Facilisi sem blandit hendrerit dignissim ante cursus ullamcorper fringilla sociosqu. Scelerisque justo lectus nam accumsan, sodales class conubia. Nostra torquent non maximus velit nascetur cras. Vel rhoncus ultrices semper; ligula netus posuere feugiat. Quam nec auctor netus ligula semper? Potenti dapibus nisi suscipit neque feugiat condimentum pulvinar.'
    },
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 5',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nulla feugiat nisi; tortor elit parturient rutrum. Facilisi sem blandit hendrerit dignissim ante cursus ullamcorper fringilla sociosqu. Scelerisque justo lectus nam accumsan, sodales class conubia. Nostra torquent non maximus velit nascetur cras. Vel rhoncus ultrices semper; ligula netus posuere feugiat. Quam nec auctor netus ligula semper? Potenti dapibus nisi suscipit neque feugiat condimentum pulvinar.'
    },
    {
      image: 'assets/aboutImage.jpg',
      title: 'Service 5',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Augue sapien turpis; quisque mollis posuere pretium vulputate. Libero pretium vestibulum ridiculus venenatis quis aliquet; eros eleifend neque. Morbi faucibus blandit ut eleifend vestibulum. Nullam ad quam, fermentum tristique senectus primis convallis fusce. Libero maecenas conubia natoque; nam parturient cursus velit. Habitasse magnis parturient etiam dignissim montes. Eget commodo convallis inceptos felis porta.'
    }
    // Add more services as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
    // Scroll to the left
    scrollLeft(container: HTMLElement): void {
      container.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll left by 300px
    }
  
    // Scroll to the right
    scrollRight(container: HTMLElement): void {
      container.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll right by 300px
    }
}
