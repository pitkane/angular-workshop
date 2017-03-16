import { Component, OnInit, Input } from '@angular/core';
import { TodoServiceService } from "../todo-service.service"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  constructor(private todoService: TodoServiceService) {
  }

  removeMe(todo) {
    this.todoService.removeTodo(todo)
  }

  @Input()
  todo;


}
