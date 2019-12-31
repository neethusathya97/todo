import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {CommonServiceService} from '../service/common-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title="Todo";
todos=[
  {name: "todo 1",discription:"discription1"},
  {name: "todo 2",discription:"discription2"},
  {name: "todo 3",discription:"discription3"}
];
newTodo=" ";
todoForm;

  constructor(private fb: FormBuilder,
  private commonService:CommonServiceService){ 
    this.todoForm = fb.group({
      name: '',
      discription:''
    });
  }

  ngOnInit() {
  }
delete(todo){
  alert(todo);
  
  this.todos=this.todos.filter(function(t){
    return t!=todo;
  })
}
add(){
  if(!this.todoForm.valid){
    this.commonService.showError();
    return;
  }
  alert("add")
  console.log(this.todoForm);
  this.todos.push({
    name: this.todoForm.value.name,
    discription: this.todoForm.value.discription });
    //this.newTodo="";
  }
 
onTextChange(event){
  this.newTodo=event.target.value;
}
}
