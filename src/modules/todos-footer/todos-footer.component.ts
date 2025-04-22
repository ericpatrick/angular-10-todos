import { FilterOption } from './models/filter-option.model';
import { Observable } from 'rxjs';
import { FilterEnum } from './../../models/filter.enum';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodosService } from 'src/services/todos.service';
import { filterOptions } from './constants/filter-options.constants';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFooterComponent {
  filterOptions: FilterOption[]
  filter$: Observable<FilterEnum>

  constructor(private todosService: TodosService) {
    this.filterOptions = filterOptions;
    this.filter$ = todosService.getFilter$();
  }

  changeFilter(event: MatButtonToggleChange): void {
    this.todosService.updateFilter(event.value);
  }
}
