import { RouterModule, Routes } from '@angular/router';
import { ConfigPerfilComponent } from './components/paths/config-perfil/config-perfil.component';
import { ContactanosComponent } from './components/paths/contactanos/contactanos.component';
import { LoginComponent } from './components/paths/login/login.component';
import { RegistrarseComponent } from './components/paths/registrarse/registrarse.component';
import { HomeComponent } from './components/paths/home/home.component';
import { NgModule } from '@angular/core';
import { FunkoComponent } from './components/paths/funko/funko.component';
import { FunkoCustomizeComponent } from './components/paths/funko/funko-customize/funko-customize.component';
import { FunkoHomeComponent } from './components/paths/funko/funko-home/funko-home.component';
import { PcbDesingComponent } from './components/paths/pcb-desing/pcb-desing.component';
import { PcbBasicComponent } from './components/paths/pcb-desing/pcb-basic/pcb-basic.component';
import { PcbCustomizeComponent } from './components/paths/pcb-desing/pcb-customize/pcb-customize.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { SoporteComponent } from './components/paths/soporte/soporte.component';
export const routes: Routes = [

    // default
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // /login
    { path: 'login', component: LoginComponent },
    // /register
    { path: 'register', component: RegistrarseComponent },
    // /home
    { path: 'home',component: HomeComponent, canActivate:[authGuardGuard] },
    // /funko
    {
        //Ruta /funko - Padre
        path: 'funko', component: FunkoComponent, canActivate:[authGuardGuard], children: [
            // Redirección de /funko a /funko/home
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            // /funko/home
            { path: 'home', component: FunkoHomeComponent },
            // /funko/customize
            { path: 'customize', component: FunkoCustomizeComponent }
        ]
    },
    // /pcbDesing
    {
        //Ruta /pcbDesing - Padre
        path: 'pcbDesing', component: PcbDesingComponent, canActivate:[authGuardGuard], children: [
            // Redirección de /pcbDesing a /pcbDesing/basic
            { path: '', redirectTo: 'pcbdesing', pathMatch: 'full' },
            // /pcbDesing/basic
            { path: 'basic', component: PcbBasicComponent },
            // /pcbDesing/customize
            { path: 'customize', component: PcbCustomizeComponent }
        ]
    },
    // /soporte
    {
        path: 'soporte', component: SoporteComponent,
        //soporte/{{area}}
        children: [
            { path: '3d-print', component: SoporteComponent },
            { path: 'pcb-desing', component: SoporteComponent },
            { path: 'create-funko', component: SoporteComponent },
            { path: 'cursos', component: SoporteComponent },
            { path: 'educational-robotics', component: SoporteComponent },
            { path: 'otro', component: SoporteComponent },
        ]
    },
    // /contact
    { path: 'contact', component: ContactanosComponent },
    // /config
    { path: 'config', component: ConfigPerfilComponent, canActivate:[authGuardGuard]},
    //Ruta comodin
    //{ path: '**', component: PageNotFoundComponent}
];
