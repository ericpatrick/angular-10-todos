import { TodosStorage } from './../models/todos-storage.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageTodosService } from 'src/services/local-storage-todos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: TodosStorage, useExisting: LocalStorageTodosService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
