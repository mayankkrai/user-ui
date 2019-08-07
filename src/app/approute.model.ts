import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes=[
    {path:'',redirectTo:'/userlist',pathMatch:'full'},
    {path:'userlist',component:UserlistComponent},
    {path:'userlist/:id',component:UserdetailsComponent},
    {path:'**',redirectTo:'/userlist'}
       
    

]

@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]
    }
)
export class AppRoutingModue{

}