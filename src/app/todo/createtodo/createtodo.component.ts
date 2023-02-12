import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoserviceService } from 'src/app/service/todoservice.service';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.scss']
})
export class CreatetodoComponent implements OnInit {
  formgroup: FormGroup;
  todo = new Todo();
  id=sessionStorage.getItem('iduser');
  constructor(private fb: FormBuilder, private todoservice:TodoserviceService,private _router:Router) {
    this.formgroup = this.fb.group({

      title:"",
      user:this.fb.group({
        id: this.id,
        })
  });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formgroup.value);

    this.todoservice.createtodo(this.formgroup.value).subscribe((data: any)=>{
     console.log(data);

     this._router.navigate(['todo']);
    },
    (error: any)=>{
      console.log(error);
    }
    );
  }

}
