import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList : Todo[] = [];
  constructor() { }

  addElementToMyTodoList(todo : Todo) {
    this.todoList.push(todo);
  }

  deleteElementFromMyTodoList(todo : Todo) {
    const index: number = this.todoList.indexOf(todo);
    if (index !== -1) {
        this.todoList.splice(index, 1);
    }
  }

  getTodoList() : Todo[] {
    return this.todoList;
  }

  printTodoList() : void {
    this.todoList.forEach((elem) => {
      console.log('Name : ' + elem.name + " Content : " + elem.content);
    })
  }
}
