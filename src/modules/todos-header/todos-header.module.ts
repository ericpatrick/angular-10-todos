import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TodosHeaderComponent } from './todos-header.component';



@NgModule({
  declarations: [TodosHeaderComponent],
  imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ],
    exports: [TodosHeaderComponent]
})
export class TodosHeaderModule { }
