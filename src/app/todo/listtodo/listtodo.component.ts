import { TodoserviceService } from './../../service/todoservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.scss']
})
export class ListtodoComponent implements OnInit {

  constructor(private todoservice:TodoserviceService) { }

  todoslist:any;

  ngOnInit(): void {
    this.todoservice.getalltodos().subscribe((todos: any) =>{
      console.log(todos);
      this.todoslist = todos;
    }
    ,
    (error:any)=>{
      console.log(error);
    });
  }

  changevalue(id:any,check:boolean){
    if(check==false){
    this.todoservice.completedtodo(id).subscribe((todos: any) =>{
      console.log(todos);
      location. reload()
    }
    ,
    (error:any)=>{
      console.log(error);
    });
    }else{
      this.todoservice.uncompletedtodo(id).subscribe((todos: any) =>{
        console.log(todos);
        location. reload()
      }
      ,
      (error:any)=>{
        console.log(error);
      });
    }
  }



}
