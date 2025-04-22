import { TodosListModule } from './../../modules/todos-list/todos-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TodosHeaderModule } from 'src/modules/todos-header/todos-header.module';
import { TodosFooterModule } from 'src/modules/todos-footer/todos-footer.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TodosHeaderModule,
    TodosListModule,
    TodosFooterModule
  ]
})
export class HomeModule { }
