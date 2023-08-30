import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotasAddEditComponent } from './notas-add-edit/notas-add-edit.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule } from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'; 
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatCardModule} from '@angular/material/card';
import { NotasComponent } from './notas/notas.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ErrorComponent } from './error/error.component';

import {MAT_DATE_LOCALE} from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { AboutComponent } from './about/about.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AverageComponent } from './average/average.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    NotasAddEditComponent,
    NotasComponent,
    LoginComponent,
    SingupComponent,
    ErrorComponent,
    HomeComponent,
    MainappComponent,
    AboutComponent,
    QuotesComponent,
    AverageComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule
   
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
