import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskLayoutComponent } from './layouts/task-layout/task-layout.component';


const routes: Routes = [
{
  path: "",
  component:TaskLayoutComponent,
  children: [
    {
      path:"",
      loadChildren: ()=> import("./modules/tasks/tasks.module").then(m=>m.TasksModule)
    }
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
