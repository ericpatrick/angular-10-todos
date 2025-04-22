import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/models';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @Input()
  todo: Todo;

  @Output()
  toggleTodo = new EventEmitter<string>();

  @Output()
  removeTodo = new EventEmitter<Todo>();

  constructor() { }

  toggleCheckbox(): void {
    this.toggleTodo.emit(this.todo.id);
  }

  closeButtonClick(): void {
    this.removeTodo.emit(this.todo);
  }
}
