export interface User{
    _id: string;
    username: string;
    email: string;
}


export interface LoginPayload{
    username:string;
    password: string;
}

export interface RegisterPayload{
    username: string;
    email: string;
    password: string;
}

export interface ApiResponse<T>{
    status?: boolean;
    message?: string;
    error?: string;
    token?: string; 
    data: T; 
}