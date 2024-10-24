import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, LoginPayload, User, } from '../model/common.model';
import { ApiEndpoint, LocalStorage } from '../constants/constants';
import { BehaviorSubject, map } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //observable de isLoggedIn
  //separar login y register en sus respectivos serivcios
  private token = '';
  private isLogged: boolean = false;
  router = inject(Router);
  loginObs:BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http:HttpClient, private loginService: LoginService) { }
  //guardar token
  //eliminar token
  

  saveToken(){
    this.token = this.loginService.getToken();
    localStorage.setItem(LocalStorage.token, this.token);
  }

  logout(){
    localStorage.removeItem("USER_TOKEN")
    this.router.navigate(['login'])
    this.isLogged = false;
    this.loginObs.next(this.isLogged);
  }
  
  isAuthenticated(): boolean {
    const token = this.loginService.getToken();
    if(token){
      this.isLogged = true
      this.loginObs.next(this.isLogged);
    }
    return !!token;
  }
}
