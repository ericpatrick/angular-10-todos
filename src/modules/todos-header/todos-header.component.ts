import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosService } from 'src/services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrls: ['./todos-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosHeaderComponent {

  public inputValue = '';

  constructor(private todosService: TodosService) { }

  changeInputValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  addTodo(): void {
    if (this.inputValue.trim().length > 0) {
      this.todosService.addTodo(this.inputValue);
      this.inputValue = '';
    }
  }

}
