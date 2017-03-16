import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {

  newName = ''

  @Input()
  todos;

  @Output()
  onNewItem = new EventEmitter();

  addTodoItem(text) {
    this.onNewItem.emit(
      { text: this.newName, done: false }
    );
    // debugger;
    // this.todos.push(

    // )
  }

}
