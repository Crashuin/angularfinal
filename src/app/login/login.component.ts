import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login: FormGroup|any;
  
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _http: HttpClient,
    private _coreService: CoreService
  ){
    

  }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })  
  }

  logindata(login: FormGroup) {
    // console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/signup").subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      });

      if (user) {
        this._coreService.openSnackBar('Inicio de sesión exitoso', 'Hecho');
        this.login.reset();
        this.router.navigate(['/appnotas']);
      } else {
        this._coreService.openSnackBar('Usuario no registrado', 'Hecho');
        this.router.navigate(['/login']);
      }

    }, err =>{
      this._coreService.openSnackBar('Error, revise la conexión', 'Hecho');
    })
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }



}




