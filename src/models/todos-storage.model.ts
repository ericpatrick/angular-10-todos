import { Todo } from './todo.model';

export abstract class TodosStorage {
  abstract getTodos(): Todo[];
  abstract setTodos(value: Todo[]): void;
}