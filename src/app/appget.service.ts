import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { UserListService } from './userlist/userlist.service';

@Injectable(

)
export class UsersGetService{
    userArray:any[];
    constructor(private http:HttpClient,private userService:UserListService){

    }
    getUsers(){
        this.http.get('https://randomuser.me/api/?results=100')
        .subscribe((response:Response)=>{
            const userArray=response.json();
            this.userService.setUser(this.userArray);
        });
    }
}