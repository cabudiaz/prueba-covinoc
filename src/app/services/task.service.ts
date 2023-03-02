import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = GlobalConstants.appURL;

  constructor(private http: HttpClient) { }


  getTask() {
    return this.http.get(`${this.url}`)
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

  updateTask(id: string, state: boolean) {
    return this.http.put(`${this.url}/${id}`, { state })
  }

  createTask(f: any) {
    return this.http.post(`${this.url}`, f)
  }
}


