import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../model/common.model';
import { ApiResponse, User, } from '../model/common.model';
import { ApiEndpoint } from '../constants/constants';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(payload: RegisterPayload){
    return this.http.post<ApiResponse<User>>(`${ApiEndpoint.Auth.Register}`,payload)
  }
}
