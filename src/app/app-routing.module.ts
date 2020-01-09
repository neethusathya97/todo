import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from'./todo/todo.component';
import { AddComponent} from './add/add.component';

const routes: Routes = [
  { path:'login',component: LoginComponent},
  { path:'todo',component: TodoComponent},
  { path:'', component: LoginComponent},
  { path:'add',component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
