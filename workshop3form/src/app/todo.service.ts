import { ToDoList } from './models';
import { EventEmitter } from '@angular/core';

export class ToDoService {

    onEditTask: EventEmitter<number> = new EventEmitter<number>();
    onTasksChanges: EventEmitter<ToDoList[]> = new EventEmitter<ToDoList[]>();

    allTasks: ToDoList[] = [{
        description: 'Submit travel documents   ',
        priorityLevel: 'High',
        dueDate: new Date(2019, 9, 30, 10, 33, 30, 0),
        status: 'outstanding'
      }];

    getAllTasks(){
        return this.allTasks.slice();
    }

    getTask(index: number){
        return this.allTasks[index];
    }

    addTask(newTask: ToDoList){
        this.allTasks.push(newTask);
    }

    deleteTask(index: number){
        this.allTasks.splice(index,1);
        this.onTasksChanges.emit(this.allTasks.slice())
    }

}