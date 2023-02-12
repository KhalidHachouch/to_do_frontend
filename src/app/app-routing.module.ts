import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",loadChildren:() => import('./login-singup/login-singup.module').then(m => m.LoginSingupModule)
  },
  {
    path:"",redirectTo:"login",pathMatch:'full'
  },
  {
    path: "todo",loadChildren:() => import('./todo/todo.module').then(m => m.TodoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
