import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [TodosComponent],
  declarations: [TodosComponent],
  providers: []
})
export class TodoModule {}
