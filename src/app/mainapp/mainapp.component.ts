import { Component, inject } from '@angular/core';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.css']
})
export class MainappComponent {

  _coreService = inject(CoreService);
  router = inject(Router);

  navigateToLogin() {
    localStorage.removeItem('token_start');
    this._coreService.openSnackBar('Se ha cerrado sesión', 'Ok');
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
