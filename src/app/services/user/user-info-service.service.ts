import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserInfo } from '../../interface/user-interface'
import { environment} from '../../../environments/environment';


const server = environment.server;
const userInfoApi : string = server + "getUserDetailInfo"
const getStatusApi: string = server + "getUserDetailInfo";
@Injectable({
  providedIn: 'root'
})

export class UserInfoServiceService {

  constructor( private http : HttpClient) { }
  
  getUserInfo(){
    let httpOptions = {
      headers: new HttpHeaders({
        // "Authorization" : "Bearer " + localStorage.getItem('acces-token'),
        "Content-Type": "application/json"
      })
    };

    let res : UserInfo;
    return this.http.post(getStatusApi, JSON.stringify({ "username": localStorage.getItem('username') }), httpOptions);
  } 

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };
}
