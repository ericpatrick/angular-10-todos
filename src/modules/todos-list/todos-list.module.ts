import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TodosListComponent } from './todos-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { RemoveConfirmationDialogComponent } from './remove-confirmation-dialog/remove-confirmation-dialog.component';

@NgModule({
  declarations: [TodosListComponent, TodoListItemComponent, RemoveConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    TodosListComponent
  ]
})
export class TodosListModule { }
