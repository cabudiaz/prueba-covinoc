import { Component } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { ListTaskComponent } from '../list-task/list-task.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent {



  constructor(
    private taskService: TaskService,
 
  ) { }

  ngOnInit(): void {
  

  }

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;


  createTask(f: NgForm) {
    console.log(f.valid);
    if( f.valid){

      this.taskService.createTask(f.value).subscribe(
        {
          next: (result) => {
  
  
            window.location.reload();
  
          }
  
        }
      )

    }
      else {
      alert ('No se ha introducido ninguna tarea')
    } 
    
  }

}
