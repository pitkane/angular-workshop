import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceService {

  todos = [
    { text: 'asdfasdf', done: false },
    { text: 'asdfasdf2 ;)', done: true },
    { text: 'asdfasdf3 ;)', done: true }
  ]

  constructor() { }

  addTodo(newItem) {
    this.todos.push(newItem)
  }

  removeTodo(item) {
    console.log("asfes")
    let index = this.todos.indexOf(item)
    this.todos.splice(index, 1);
  }

  getTodos() {
    return this.todos
  }

  // onAddNewItem(newTodo) {
  //   this.itemAdded = 'New Item added';
  //   setTimeout(() => {
  //     this.itemAdded = ''
  //   }, 2000);
  // }
}
