import { UserList } from './userlist.module';

export class UserListService{
   private userlist:UserList[]=[
        new UserList('Mayank','rai','mayankumarai',1345677456,'22/06/2000'),
        new UserList('kartik','rai','kartikgrgnmm',1345677456,'22/06/2000')
      
      ];

      getUserLists(){
          return this.userlist;

      }
      getUserList(n:number){
          return this.userlist[n];
      }
      setUser(user:UserList[]){
          this.userlist=user;
      }
      
}