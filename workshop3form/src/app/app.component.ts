import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ToDoList } from './models';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoService]
})
export class AppComponent implements OnInit {
  title = 'To-do List';
  newTask: ToDoList;
  allTasks: ToDoList[];

  constructor(private toDoService: ToDoService){

  }

  ngOnInit(){
    this.allTasks = this.toDoService.getAllTasks();
  }

  addToList(){
    this.toDoService.addTask(this.newTask);
    this.allTasks = this.toDoService.getAllTasks();
  }
}
