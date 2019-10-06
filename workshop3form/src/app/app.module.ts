import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateListComponent } from './create-list/create-list.component';
import { OutstandingListComponent } from './outstanding-list/outstanding-list.component';
import { ToDoService } from './todo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DueDateValidator } from './due-date-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    OutstandingListComponent,
    DueDateValidator
  ],
  imports: [
    BrowserModule, 
    FormsModule, BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
