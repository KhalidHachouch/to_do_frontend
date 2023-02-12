import { TodoComponent } from './todo/todo.component';
import { ListtodoComponent } from './listtodo/listtodo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetodoComponent } from './createtodo/createtodo.component';


const routes: Routes = [
  {
    path: '',component:TodoComponent,children:[
      {path: '',component:ListtodoComponent},
      {path: 'createtodo',component:CreatetodoComponent},


    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
