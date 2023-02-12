import { SignuploginComponent } from './signuplogin/signuplogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path: '',component:SignuploginComponent,children:[
      {path: '',component: LoginComponent},
      {path: 'singup',component:SingupComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSingupRoutingModule { }
