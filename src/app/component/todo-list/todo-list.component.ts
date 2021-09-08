import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  name = "";
  content = "";

  todoList : Todo[] = null;

  constructor(private todoService : TodoService, private toastr : ToastrService) {
    this.todoList = this.todoService.getTodoList();
  }

  ngOnInit(): void {
    this.toastr.info('Bienvenue dans votre TodoList.');
  }

  addNewTodo() {
    this.todoService.addElementToMyTodoList(new Todo(this.name, this.content));
    this.getTodoList();
    this.toastr.success(`Le todo ${this.name} a été ajouté avec succès.`);
    this.name = "";
    this.content = "";
  }

  getTodoList() {
    this.todoList = this.todoService.getTodoList();
  }

  deleteElementFromTodoList(todo : Todo) {
    this.todoService.deleteElementFromMyTodoList(todo);
    this.toastr.success('Le todo ' + todo.name + ' a bien été supprimé de votre TodoList.');
    this.getTodoList();
  }

}
