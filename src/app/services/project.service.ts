import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization" : "Bearer " + localStorage.getItem('access_token'),
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  constructor(
    private http : HttpClient,
  ) { }

  getListProject(){
    let data  = {
      'owner' : localStorage.getItem('username'),
      'token' : localStorage.getItem('access_token'),
      "status_id" : "CREATED",
	    "type" : "PRIVATE"
    }
    return this.http.post( environment.server +'project/listpro', data, httpOptions);
  }

  getDetailProject( projectId : string){
   
    let project = {
      'projectId' : projectId
    }
    return this.http.post( environment.server +'project/detailPro', project, httpOptions);
  }

  addProject( data : any){
    return this.http.post( environment.server + 'project/addpro', data, httpOptions);
  }

  addTask( data : any){
    return this.http.post( environment.server + 'task/addtask', data, httpOptions);
  }

  updateTask( taskId : string, statusId : string){
    let updateData = {
      "taskId" : taskId,
	    "statusId" : statusId
    }
    return this.http.post( environment.server + 'project/updateTask', updateData);
  }

  addMember( projectId : string, memberId : string){
    let addMem = {
      "projectId" : projectId,
	    "memberId" : memberId
    }
    return this.http.post(environment.server + 'project/addMember', addMem ,httpOptions );
  }
}
