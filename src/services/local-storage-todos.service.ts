import { Injectable } from '@angular/core';
import { Todo } from 'src/models';
import { TodosStorage } from 'src/models/todos-storage.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTodosService extends TodosStorage {
  private readonly key = 'todos';

  constructor() {
    super();
  }

  getTodos(): Todo[] {
    const dataStr = localStorage.getItem(this.key);
    try {
      const data = JSON.parse(dataStr) as Todo[] | null;
      return data ? data : [];
    } catch (error) {
      console.error(error);
      return []
    }
  }
  setTodos(value: Todo[]): void {
    const valueStr = JSON.stringify(value);
    localStorage.setItem(this.key, valueStr);
  }
}
