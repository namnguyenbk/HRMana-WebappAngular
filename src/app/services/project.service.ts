import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
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
    return this.http.post( environment.server +'project/listpro', data);
  }

  getDetailProject( projectId : string){
    let project = {
      'projectId' : projectId
    }
    return this.http.post( environment.server +'project/detailPro', project);
  }
}
