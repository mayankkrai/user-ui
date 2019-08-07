import { Component, OnInit, Input } from '@angular/core';
import { UserList } from '../userlist.module';
import { UserListService } from '../userlist.service';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent implements OnInit {
  @Input() userList:UserList;
  @Input() index:number;

  ngOnInit() {
   
  }

}
