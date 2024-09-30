import { Routes } from '@angular/router';
import { ConfigPerfilComponent } from './components/paths/config-perfil/config-perfil.component';
import { ContactanosComponent } from './components/paths/contactanos/contactanos.component';
export const routes: Routes = [
    {path: 'contact', component:ContactanosComponent},
    {path: 'config', component:ConfigPerfilComponent}
];
