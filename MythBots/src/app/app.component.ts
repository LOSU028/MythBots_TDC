import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLogged: boolean = false
  constructor(private authService: AuthService){
    authService.loginObs.subscribe((isLogged:boolean) => {
      this.isLogged = isLogged;
    })
  }
  
  ngOnInit(): void {
    console.log(localStorage.getItem("USER_TOKEN"));
    if (localStorage.getItem("USER_TOKEN")){
      console.log("yes");
      this.isLogged = true;
    }
  }
  
  title = 'MythBots';
}
