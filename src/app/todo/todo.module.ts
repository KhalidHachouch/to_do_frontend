import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { ListtodoComponent } from './listtodo/listtodo.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponent,
    ListtodoComponent,
    CreatetodoComponent,

  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
