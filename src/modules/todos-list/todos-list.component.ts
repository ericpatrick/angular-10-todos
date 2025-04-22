import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterEnum, Todo } from 'src/models';
import { TodosService } from 'src/services/todos.service';
import { RemoveConfirmationDialogComponent } from './remove-confirmation-dialog/remove-confirmation-dialog.component';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
  todoList$: Observable<Todo[]>
  hasTodos$: Observable<boolean>;

  constructor(private todosService: TodosService, public dialog: MatDialog) {
    this.todoList$ = combineLatest([
      this.todosService.getTodos$(),
      this.todosService.getFilter$()
    ]).pipe(
      map(([todos, filter]: [Todo[], FilterEnum]) => {
        switch (filter) {
          case FilterEnum.COMPLETED:
            return todos.filter(item => item.isCompleted);
          case FilterEnum.INCOMPLETED:
            return todos.filter(item => !item.isCompleted);
          default:
            return todos;
        }
      })
    );

    this.hasTodos$ = this.todoList$.pipe(
      map(todos => todos.length > 0)
    );
  }

  ngOnInit(): void {
    this.todosService.loadFromStorage();
  }

  trackByFn(index: number, todo: Todo): string {
    return todo.id;
  }

  toggleTodo(todoId: string): void {
    this.todosService.toggleTodo(todoId);
  }

  removeTodo(todo: Todo): void {
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent, {
      width: '85%',
      maxWidth: '400px',
      data: todo
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todosService.removeTodo(todo.id);
      }
    });
  }
}
