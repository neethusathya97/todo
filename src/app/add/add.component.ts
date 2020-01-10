import { Component, OnInit } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';
import { TodoService} from '../service/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todoForm;

  constructor(private fb: FormBuilder,private todoService:TodoService
    ) {
      this.todoForm = fb.group({
        name: '',
        discription:''
      })
     }

  ngOnInit() {
  }
  add() {
    //this.todoService.hello();
    if(!this.todoForm.valid){
      alert("error")
      return;
    }
    this.todoService.add(this.todoForm.value.name,
    this.todoForm.value.discription);
   // alert("add")
    //console.log(this.todoForm);
  }
}


