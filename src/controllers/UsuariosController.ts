import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { api } from "../apiBaseURL";
import jwtDecode from 'jwt-decode';

export type usuarioType = {
    cpf: string,
    email: string,
    password: string,
    birthday: string,
    role: string,
    idSubscription?: number
}

export type usuarioResponseType = {
    id: number,
    cpf: string,
    email: string,
    password: string,
    birthday: string,
    role: string,
    idSubscription: number
}

export async function GetAllUsuarios(){
    try{
        const response: AxiosResponse = await api.get("/usuarios");

        console.log(response.data);
    } catch(error){
        throw error;
    }
}

export async function GetUsuarioByEmail(email:string){
    try{
        const response: AxiosResponse = await api.get(`/usuarios/findByEmail/${email}`);
        
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function PostUsuario(usuario: usuarioType){
    try{
        const config: AxiosRequestConfig = {
            headers: {
            'Accept': 'application/json',
            } as RawAxiosRequestHeaders,
        }

        const data = {
            ...usuario,
            birthday: new Date(usuario.birthday).toISOString(),
            role: "comum",
            idSubscription: usuario.idSubscription
        };
        console.log(data)
        const response = await api.post("/usuarios", data, config);
        console.log(response.status)
    }
    catch(error){
        throw error;
    }
}

export async function ExecuteLogin(email: string, password: string){
    try{
        const response = await api.post("/usuarios/login", {email, password});
        const token = response.data.token;

        localStorage.setItem("token", token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    catch(error){
        throw error;
    }
}

export async function GetCurrentUsuario(){
    const token = localStorage.getItem('token');

    if(token){
        const user = await GetUsuarioByEmail(jwtDecode<any>(token).email);
        return user;
    }

    return null;
}

export async function EditUsuario(id: number, cpf:string, email: string, password: string, birthday: string, idSubscription: number){
    try{
        const data = {
            cpf: cpf,
            email: email,
            password: password,
            birthday: new Date(birthday).toISOString(),
            role: "comum",
            idSubscription: idSubscription
        };

        const response: AxiosResponse = await api.put(`/usuarios/${id}`, data);

        return response.status;
    }
    catch(error){
        throw error;
    }
}

export async function DeleteUsuario(id: number){
    try{
        const response: AxiosResponse = await api.delete(`/usuarios/${id}`);

        return response.status;
    }
    catch(error){
        throw error;
    }
}