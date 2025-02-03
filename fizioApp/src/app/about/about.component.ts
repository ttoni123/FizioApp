import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-about',
  imports: [GoogleMapsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  center: google.maps.LatLngLiteral = { lat: 43.51928, lng: 16.24777 }
}
