import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NotasComponent } from './notas/notas.component';
import { ErrorComponent } from './error/error.component';
import { loginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AverageComponent } from './average/average.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
    path:'mainapp',
    //component: MainappComponent,
    component: MainappComponent,
    canActivate: [loginGuard],
    children:[
      {
        path: 'notas',
        component: NotasComponent,
      },
      {
        path: 'average',
        component: AverageComponent
      },
      {
        path: 'quotes',
        component: QuotesComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },

    ]
  },
  { 
    path: '',
    component: HomeComponent,
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
