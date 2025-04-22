import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TodosFooterComponent } from './todos-footer.component';



@NgModule({
  declarations: [TodosFooterComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [TodosFooterComponent]
})
export class TodosFooterModule { }
