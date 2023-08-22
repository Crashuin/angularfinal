import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NotasComponent } from './notas/notas.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SingupComponent
  },
  {
    path:'appnotas',
    component: NotasComponent
  },
  { path: '',
   redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',
    component: ErrorComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
