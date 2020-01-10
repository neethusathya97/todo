import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule}from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import {HttpClientModule} from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
