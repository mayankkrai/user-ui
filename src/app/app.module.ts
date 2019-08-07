import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AppRoutingModue } from './approute.model';
import { UserListService } from './userlist/userlist.service';
import { UseritemComponent } from './userlist/useritem/useritem.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdetailsComponent,
    UseritemComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModue
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
