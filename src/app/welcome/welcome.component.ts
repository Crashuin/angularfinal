import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from "@angular/core";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  router = inject(Router);

  navigateToLogin() {
    localStorage.removeItem('token_start');
    this.router.navigate(['/login']);
  }

}
