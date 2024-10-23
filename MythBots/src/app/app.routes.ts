import { RouterModule, Routes } from '@angular/router';
import { ConfigPerfilComponent } from './components/paths/config-perfil/config-perfil.component';
import { ContactanosComponent } from './components/paths/contactanos/contactanos.component';
import { LoginComponent } from './components/paths/login/login.component';
import { RegistrarseComponent } from './components/paths/registrarse/registrarse.component';
import { HomeComponent } from './components/paths/home/home.component';
import { CreateFunkoComponent } from './components/paths/create-funko/create-funko.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrarseComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create-funko', component: CreateFunkoComponent },
    { path: 'contact', component: ContactanosComponent },
    { path: 'config', component: ConfigPerfilComponent },
];
