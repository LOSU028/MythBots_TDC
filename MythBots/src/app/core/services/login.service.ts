import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../model/common.model';
import { ApiResponse, User, } from '../model/common.model';
import { ApiEndpoint } from '../constants/constants';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  token = '';

  login(payload: LoginPayload){
    return this.http.post<ApiResponse<User>>(`${ApiEndpoint.Auth.Login}`,payload)
      .pipe(
        tap((response:ApiResponse<User>)=>{
          if(response.token){
            this.token = response.token;
          }
        })
      )
  }

  getToken(){
    return this.token;
  }
}
