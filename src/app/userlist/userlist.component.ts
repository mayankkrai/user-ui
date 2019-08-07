import { Component, OnInit, Input, Injectable } from '@angular/core';
import { UserList } from './userlist.module';
import { UserListService } from './userlist.service';
import { UsersGetService } from '../appget.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers:[UserListService]
})
export class UserlistComponent implements OnInit {
@Input() userlist:UserList[];
@Input() index:number;


  constructor( private userService:UserListService) { }

  ngOnInit() {
    this.userlist=this.userService.getUserLists();
  }


}
