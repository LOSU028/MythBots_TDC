import { environment } from "../../../environments/environment";

export const ApiEndpoint = {
    Auth:{
        Register: `${environment.apiUrl}users/register`,
        Login: `${environment.apiUrl}users/login`
    }

}


export const LocalStorage = {
    token: 'USER_TOKEN',
}