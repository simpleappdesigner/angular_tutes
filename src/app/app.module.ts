import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { ExtracttweetsComponent } from './extracttweets/extracttweets.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsTemplateDriveComponent } from './forms-template-drive/forms-template-drive.component'
import { FormsModule } from '@angular/forms';

//1 create a const which will have all the routes
const appRoutes:Route[] =[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'servers',component:ServersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent,
    AlertComponent,
    PlaceholderDirective,
  //HttpClientModule,
   ExtracttweetsComponent,
  FormsTemplateDriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers:[HttpClient]
  
})
export class AppModule { }
