import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    // this.login = new FormGroup({
    //   'fname': new FormControl(),
    //   'password': new FormControl()
    // })
    
    this.login = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {

  }

  logindata(login: FormGroup) {
    // console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/signup").subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password
      });

      if (user) {
        const token = 'token-sesion';
        localStorage.setItem('token_start', token);
        this._coreService.openSnackBar('Inicio de sesión exitoso', 'Hecho');
        this.login.reset();
        this.router.navigate(['/mainapp/notas']);
      } else {
        this._coreService.openSnackBar('Revise sus credenciales', 'Hecho');
        this.router.navigate(['/login']);
      }

    }, err =>{
      this._coreService.openSnackBar('Error, revise la conexión', 'Hecho');
    })
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }


  //validaciones

  get email() {
    return this.login.get('email') as FormControl;
  }

  get password() {
    return this.login.get('password') as FormControl;
  }

  

}




