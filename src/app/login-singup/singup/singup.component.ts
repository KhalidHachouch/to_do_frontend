import { User } from './../../models/user';
import { UserserviceService } from './../../service/userservice.service';
import { Component, OnInit, } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})

export class SingupComponent implements OnInit {

  formgroup: FormGroup;
  user = new User();
  constructor(private fb: FormBuilder, private userservice:UserserviceService,private _router:Router) {
    this.formgroup = this.fb.group({

        email:"",
        name:"",
        password:""

    });

  }


  ngOnInit(): void {
  }

  submit(){
    console.log(this.formgroup.value);

    this.userservice.signup(this.formgroup.value).subscribe((data: any)=>{
     console.log(data);
     this._router.navigate(['todo']);
    },
    (error: any)=>{
      console.log(error);
    }
    );
  }

}
