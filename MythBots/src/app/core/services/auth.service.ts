import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, LoginPayload, User, RegisterPayload } from '../model/common.model';
import { ApiEndpoint, LocalStorage } from '../constants/constants';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(payload: RegisterPayload){
    return this.http.post<ApiResponse<User>>(`${ApiEndpoint.Auth.Register}`,payload)
  }

  login(payload: LoginPayload){
    return this.http.post<ApiResponse<User>>(`${ApiEndpoint.Auth.Login}`,payload)
    .pipe(
      map((response) => {
        if(response.status && response.token){
          localStorage.setItem(LocalStorage.token, response.token);
        }
        return response;
      })
    );
  }
}
