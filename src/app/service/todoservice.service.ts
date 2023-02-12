import { HttpClient } from '@angular/common/http';
import { Todointerface } from './../interface/todointerface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService implements Todointerface {

  apiUrl:string ="http://localhost:8089";
  constructor(private http:HttpClient) { }

  getalltodos(): any {
    return this.http.get(`${this.apiUrl}/all`);
  }

  createtodo(todo:any):any{
    return this.http.post(`${this.apiUrl}/save`,todo);
  }

  completedtodo(id:any):any{
    return this.http.put(`${this.apiUrl}/completed/${id}`,id);
  }
  uncompletedtodo(id:any):any{
    return this.http.put(`${this.apiUrl}/uncompleted/${id}`,id);
  }
}
