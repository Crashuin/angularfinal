import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NotasComponent } from './notas/notas.component';
import { ErrorComponent } from './error/error.component';
import { loginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';

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
    component: NotasComponent,
    canActivate: [loginGuard]
  },{
    path:'home',
    component: HomeComponent
  },
  { path: '',
    // redirectTo: '/login',
    component: HomeComponent,
    // pathMatch: 'full'
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
