import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title="Todo 1";
todos=[

  "todo 1",
  "todo 2",
  "todo 3",

]
newTodo="";
  constructor() { }

  ngOnInit() {
  }
delete(todo){
  alert(todo);
  
  this.todos=this.todos.filter(function(t){
    return t!=todo;
  })
}
add(){
  this.todos.push(this.newTodo);
  this.newTodo=" ";

}
onTextChange(event){
  this.newTodo=event.target.value;
}
}
