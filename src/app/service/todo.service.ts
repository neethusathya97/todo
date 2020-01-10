import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

add(name,description){
  this.http.post('http://localhost:3000/create',{
    name,
    description
  }).subscribe (data=>{
      console.log("data",data);
      alert("done");
    })
  }
  get(){
    this.http.get('http://localhost:3000')
     
    .subscribe (data=>{
        console.log("data",data);
        alert("done");
      })
}}