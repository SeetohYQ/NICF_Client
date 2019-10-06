import { Component, OnInit, Input } from '@angular/core';
import { ToDoList } from '../models';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-outstanding-list',
  templateUrl: './outstanding-list.component.html',
  styleUrls: ['./outstanding-list.component.css']
})
export class OutstandingListComponent implements OnInit {

  @Input() tasks: ToDoList[];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoService.onTasksChanges.subscribe(
      (tasks: ToDoList[]) => {
        this.tasks = tasks;
      });
  }

  getColor(task: ToDoList){
    if (task.priorityLevel === 'High'){
      return 'rgb(240, 68, 65)';
    }
    else if (task.priorityLevel === 'Medium'){
      return 'rgb(255, 172, 64)'
    }
  }

  editTask(index: number){
    this.toDoService.onEditTask.emit(index);
  }

  deleteTask(index: number){
    this.toDoService.deleteTask(index);
  }

}
