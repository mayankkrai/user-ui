import { Component, OnInit, Input } from '@angular/core';
import { UserList } from '../userlist/userlist.module';
import { ActivatedRoute, Params } from '@angular/router';
import { UserListService } from '../userlist/userlist.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userlist:UserList;
  id:number;
  @Input() index:number;

  constructor(private userService:UserListService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.userlist=this.userService.getUserList(this.id);
      }

    );


  }

}
