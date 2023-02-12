
import { SingupComponent } from './singup/singup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginSingupRoutingModule } from './login-singup-routing.module';
import { LoginComponent } from './login/login.component';
import { SignuploginComponent } from './signuplogin/signuplogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    SignuploginComponent
  ],
  imports: [
    CommonModule,
    LoginSingupRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule




  ]
})
export class LoginSingupModule { }
