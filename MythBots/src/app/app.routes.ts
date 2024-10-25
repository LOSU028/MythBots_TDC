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
export const routes: Routes = [

    // default
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // /login
    { path: 'login', component: LoginComponent },
    // /register
    { path: 'register', component: RegistrarseComponent },
    // /home
    { path: 'home', component: HomeComponent },
    {
        //Ruta /funko - Padre
        path: 'funko', component: FunkoComponent, children: [
            // Redirección de /funko a /funko/home
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            // /funko/home
            { path: 'home', component: FunkoHomeComponent },
            // /funko/customize
            { path: 'customize', component: FunkoCustomizeComponent }
        ]
    },
    // /contact
    { path: 'contact', component: ContactanosComponent },
    // /config
    { path: 'config', component: ConfigPerfilComponent },
    //Ruta comodin
    //{ path: '**', component: PageNotFoundComponent}
];
