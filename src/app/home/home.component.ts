import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  router = inject(Router);

  navigateToLogin() {
    localStorage.removeItem('token_start');
    this.router.navigate(['/login']);
  }

}
