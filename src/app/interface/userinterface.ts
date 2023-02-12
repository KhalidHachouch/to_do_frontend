import { Observable, Observer } from 'rxjs';

import { User } from './../models/user';


export interface Userinterface {

   Login(email:string,password:string):Observer<any>  ;
   signup(User:any):Observer<any> ;

}
