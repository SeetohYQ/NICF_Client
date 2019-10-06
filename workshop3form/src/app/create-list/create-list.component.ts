import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ToDoList } from '../models';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  priorities: string[] = ['High', 'Medium','Low'];
  defaultPriority: string = 'Medium';
  today: Date = new Date();
  editMode: boolean = false;
  taskIndex: number;
  
  @ViewChild('f',{static:false}) form: NgForm;
  @Output('') addNewTask: EventEmitter<ToDoList> = new EventEmitter<ToDoList>();

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoService.onEditTask.subscribe(
      (index: number)=> {
        this.editMode = true;
        this.taskIndex = index;
        this.form.setValue(
          {
            description: this.toDoService.getTask(index).description,
            priorityLevel: this.toDoService.getTask(index).priorityLevel,
            dueDate: this.toDoService.getTask(index).dueDate
          }
        )
      }
    )
  }

  processForm() {
    if (this.editMode === true){
      let task =  this.toDoService.getTask(this.taskIndex);
      task.description = this.form.value['description'];
      task.priorityLevel = this.form.value['priorityLevel'];
      task.dueDate = this.form.value['dueDate'];
      this.form.resetForm();
      this.editMode = false; 
    }
    else {
      const submittedForm: ToDoList = {
        description: this.form.value['description'],
        priorityLevel: this.form.value['priorityLevel'],
        dueDate: new Date(this.form.value['dueDate']),
        status: 'outstanding'
      };
      this.form.resetForm();
      this.addNewTask.emit(submittedForm);
    }
  }
}
