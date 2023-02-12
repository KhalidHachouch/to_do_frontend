import { Router } from '@angular/router';
import { UserserviceService } from './../../service/userservice.service';
import { User } from './../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formgroup: FormGroup;

  constructor(private fb: FormBuilder, private userservice:UserserviceService,private _router:Router) {
    this.formgroup = this.fb.group({

        email:"",
        password:""

    });

  }


  ngOnInit(): void {
  }

  submit(){
    console.log(this.formgroup.value['email']);

    this.userservice.Login(this.formgroup.value['email'],this.formgroup.value['password']).subscribe((data: any)=>{
     console.log(data);
     sessionStorage.setItem('iduser',data.id);
     this._router.navigate(['todo']);
    },
    (error: any)=>{
      console.log(error);
    }
    );
  }

}
