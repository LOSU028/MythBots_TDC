import { Routes } from '@angular/router';
import { ConfigPerfilComponent } from './components/paths/config-perfil/config-perfil.component';
import { ContactanosComponent } from './components/paths/contactanos/contactanos.component';
import { LoginComponent } from './components/paths/login/login.component';
import { RegistrarseComponent } from './components/paths/registrarse/registrarse.component';
import { HomeComponent } from './components/paths/home/home.component';
import { DashboardComponent } from './components/paths/dashboard/dashboard.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'register',  component: RegistrarseComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'contact', component:ContactanosComponent},
    {path: 'config', component:ConfigPerfilComponent}
];
