import { environment } from "../../../environments/environment";

export const ApiEndpoint = {
    Auth:{
        Register: `${environment.apiUrl}users/register`,
        Login: `${environment.apiUrl}users/login`
    },
    fileUpload:`${environment.apiUrl}uploads`
}


export const LocalStorage = {
    token: 'USER_TOKEN',
}