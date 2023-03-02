import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from 'src/app/services/task.service';
import { TaskData } from 'src/app/core/models/task.model';





@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.sass']
})
export class ListTaskComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'state', 'delete'];
  dataSource: MatTableDataSource<TaskData>

  constructor(private taskService: TaskService) { }


  /*  @Input ("tasksList") tasksList:[] = [] */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  tasksList: TaskData[] 

  ngOnInit(): void {

    this.taskService.getTask().subscribe(
      {
        next: (result:any): void => {
          this.tasksList = result
          console.log(this.tasksList);

          this.dataSource = new MatTableDataSource(this.tasksList);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }
      }
    )

  }


  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(
      {
        next: (result) => {
          this.ngOnInit()
        }

      }
    )
  }

  updateTask(id: string, e: any) {

    this.taskService.updateTask(id, e.checked).subscribe(
      {
        next: (result) => {
          this.ngOnInit()
        }

      }
    )
  }

  ngAfterViewInit() {

    console.log("Sirve este modulo");

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
/* function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };

} */

