import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo, FilterEnum } from 'src/models';
import { TodosStorage } from 'src/models/todos-storage.model';
import { generateUUIDv4 } from 'src/utils/uuid.util';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos$ = new BehaviorSubject<Todo[]>([]);
  private filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.ALL);

  constructor(private todoStorage: TodosStorage) {}

  private setTodos(value: Todo[]): void {
    this.todoStorage.setTodos(value);
    this.todos$.next(value);
  }
  
  getTodos$(): Observable<Todo[]> {
    return this.todos$;
  }

  getFilter$(): Observable<FilterEnum> {
    return  this.filter$;
  }

  loadFromStorage(): void {
    const data = this.todoStorage.getTodos();
    this.todos$.next(data);
  }

  addTodo(value: string): void {
    const newTodo: Todo = {
      id: generateUUIDv4(),
      description: value,
      isCompleted: false
    }
    this.setTodos([...this.todos$.getValue(), newTodo]);
  }

  toggleTodo(todoId: string): void {
    const updatedTodos = this.todos$.getValue().map(todo => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    this.setTodos(updatedTodos);
  }

  removeTodo(todoId: string): void {
    const updatedTodos = this.todos$.getValue().filter(item => item.id !== todoId);
    this.setTodos(updatedTodos);
  }

  updateFilter(value: FilterEnum): void {
    this.filter$.next(value);
  }
}
