import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
  from '@angular/router';

  import { DialogServiceService } from './common/dialog-service.service'
  import { LoadingEffectService } from './common/loading-effect.service'

import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

let server: string;
  server = environment.server;


const loginApi: string = server + "oauth/token";
const registrationApi: string = server + "register";
const getStatusApi: string = server + "getStatusUser";
const verifyApi: string = server + "verify?verify_code=";


const httpOptionsAuth = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic bG9naW5zZXJ2aWNlOmRldmdsYW4tc2VjcmV0'
  })
};

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

export interface UserLogin {
  username: string;
  password: string;
  grant_type: string;
}

export interface jwtData {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: string;
  scope: string;
  jti: string;
}

export interface commonRes {
  code: string;
  data: string;
}

@Injectable()
export class AuthGuardService {

  constructor(
    private router: Router, 
    private http: HttpClient,
    private dialogService: DialogServiceService,
    private loadingService: LoadingEffectService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.isGuest()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

  isGuest() {
    if (localStorage.getItem('access_token')) {
      // let refreshToken = {
      //   'grant_type': 'refresh_token',
      //   'refesh_token': this.cookieService.get('refresh_token'),
      // }

      // this.http.post<jwtData>(loginApi, refreshToken, httpOptions).subscribe(tokenData => {
      //   localStorage.setItem('acces_token', tokenData.access_token);
      //   localStorage.setItem('refresh_token', tokenData.refresh_token);
      // }, error => {
      //   return true;
      // });
      return false;
    } else {
      return true;
    }
  }

  getUser() {
    // return username;
  }

  login(usernameLg: string, passwordLg: string) {
    let user: UserLogin = {
      'grant_type': 'password',
      'username': usernameLg,
      'password': passwordLg,
    };
    const userLoginDataEncodedUrl = Object.keys(user).filter(k => user.hasOwnProperty(k)).map(
      k => encodeURIComponent(k) + '=' + encodeURIComponent(user[k])).join('&');
    this.loadingService.showLoading();
    this.http.post<jwtData>(loginApi, userLoginDataEncodedUrl, httpOptionsAuth).subscribe(tokenData => {
      this.loadingService.stopLoading();
      if (!tokenData) {
        this.dialogService.openAlert('Tài khoản và mật khẩu không chính xác!');
      } else {
        this.cookieTokenData(tokenData, usernameLg);
      }
    }, error => {
      this.loadingService.stopLoading();
      this.dialogService.openAlert('Không thể đăng nhập!');
    });
    this.loadingService.showLoading();
    this.http.post(getStatusApi, JSON.stringify({ "username": user.username }), httpOptions)
      .subscribe((res: any) => {
        this.loadingService.stopLoading();
        if (res.status == 'VERIFY') {
          this.router.navigate(['']);
        } else {
          localStorage.clear();
          this.dialogService.openPrompt('Xác thưc tài khoản','Mã xác nhận đã được gửi vào email của bạn. Nhập mã xác nhận vào đây!')
          .afterClosed().subscribe((value: string) => {
            if (value) {
              let httpOptions = {
                headers: new HttpHeaders({
                  'Authorization': 'Bearer' + localStorage.getItem('access_token'),
                })
              };
              this.loadingService.showLoading();
              this.http.get(verifyApi + value.toString(), httpOptions).subscribe((res: commonRes) => {
                this.loadingService.stopLoading();
                if (res.code == '1000') {
                  this.dialogService.openAlert('Đăng kí thành công!');
                  this.router.navigate(['']);
                } else {
                  this.dialogService.openAlert('Không thể xác thực!');
                }
              });
            } else {
              this.dialogService.openAlert('Không thể xác thực!');
            }
          });
        }
      });
      this.loadingService.stopLoading();
  }

  cookieTokenData(tokenData: jwtData, username: string) {
    localStorage.clear();
    localStorage.setItem('username', username);
    localStorage.setItem('access_token', tokenData.access_token);
    localStorage.setItem('refresh_token', tokenData.refresh_token);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  registration(username: string, password: string, email: string, fname: string, lname: string) {

    let dataRegister = {
      'username': username,
      'password': password,
      'email': email,
      'firstname': fname,
      'lastname': lname,
    }
    this.loadingService.showLoading();
    this.http.post<any>(registrationApi, JSON.stringify(dataRegister), httpOptions)
      .subscribe(res => {
        this.loadingService.stopLoading();
        localStorage.clear();
        if (res.code == "1002") {
          this.dialogService.openAlert('Email đã tồn tại! Vui lòng sử dụng email khác.');
        }
        if (res.code == "1000") {
          this.dialogService.openPrompt('Xác thực','Kiểm tra mã mã xác nhận đươc gửi trong mail của bạn!');
          this.router.navigate(['login']);
        }
        if (res.code == "1103") {
          this.dialogService.openAlert('Không thể gửi mã xác thực tới ' + dataRegister.email);
        }
        if (res.code == "1100") {
          this.dialogService.openAlert('Tên đăng nhập ' + dataRegister.username + ' đã được sử dụng!');
        }
      });;
  }

}
