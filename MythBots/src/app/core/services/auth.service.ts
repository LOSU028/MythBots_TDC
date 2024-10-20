import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, LoginPayload, User, RegisterPayload } from '../model/common.model';
import { ApiEndpoint } from '../constants/constants';
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
  }
}
