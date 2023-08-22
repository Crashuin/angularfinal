import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signup: FormGroup|any;
  signuser:any;
  
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _http: HttpClient,
    private _coreService: CoreService 
  ){
    

  }

  ngOnInit(): void {
      // this.signup = new FormGroup({
      //   'fname': new FormControl(),
      //   'lname': new FormControl(),
      //   'email': new FormControl(),
      //   'password': new FormControl()
      // })

      this.signup = this._fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
  }

  signupdata(signup: FormGroup){
    //console.log(this.signup.value);
    //this.signuser = this.signup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.signup.value).subscribe(res=>{
      this._coreService.openSnackBar('Se ha registrado correctamente', 'Hecho');
      this.signup.reset();
      this.router.navigate(['/login']);
    }, err => {
      this._coreService.openSnackBar('No se pudo registrar el usuario', 'Hecho');
    })
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  //validaciones

  get fname() {
    return this.signup.get('fname') as FormControl;
  }

  get lname() {
    return this.signup.get('lname') as FormControl;
  }

  get email() {
    return this.signup.get('email') as FormControl;
  }

  get password() {
    return this.signup.get('password') as FormControl;
  }



}
