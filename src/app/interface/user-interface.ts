export interface UserInfo{
    fname : string;
    lname : string;
    email : string;
    roleId : string;
    status : string;
}

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

