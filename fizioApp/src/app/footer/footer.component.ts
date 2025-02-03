// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = ''; // To store the email input

  subscribeToNewsletter() {
    if (this.email) {
      alert(`Thank you for subscribing with email: ${this.email}`);
      this.email = ''; // Reset the input after submission
    } else {
      alert('Please enter a valid email!');
    }
  }
}
