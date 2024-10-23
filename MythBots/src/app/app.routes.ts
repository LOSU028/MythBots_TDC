import { RouterModule, Routes } from '@angular/router';
import { ConfigPerfilComponent } from './components/paths/config-perfil/config-perfil.component';
import { ContactanosComponent } from './components/paths/contactanos/contactanos.component';
import { LoginComponent } from './components/paths/login/login.component';
import { RegistrarseComponent } from './components/paths/registrarse/registrarse.component';
import { HomeComponent } from './components/paths/home/home.component';
import { CreateFunkoComponent } from './components/paths/create-funko/create-funko.component';
import { NgModule } from '@angular/core';
import { CustomizeFunkoComponent } from './components/paths/create-funko/customize-funko/customize-funko.component';
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
        //Ruta /create-funko
        path: 'create-funko', component: CreateFunkoComponent, children: [
            // /create-funko/customize
            { path: 'customize', component: CustomizeFunkoComponent }
        ]
    },
    // /contact
    { path: 'contact', component: ContactanosComponent },
    // /config
    { path: 'config', component: ConfigPerfilComponent },
    //Ruta comodin
    //{ path: '**', component: PageNotFoundComponent}
];
