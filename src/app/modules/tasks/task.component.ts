import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent {


  demo = "Hola"
  tasksList:any = []
  constructor(private taskService: TaskService) {

  }
  ngOnInit(): void {

   /*  this.taskService.getTask().subscribe(
      {
        next: (result) => {
          this.tasksList = result
          console.log(this.tasksList); 
          
        }
      }
    ) */
  }

}
