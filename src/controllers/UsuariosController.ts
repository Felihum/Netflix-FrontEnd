import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { api } from "../apiBaseURL";

export type usuarioType = {
    cpf: string,
    email: string,
    password: string,
    birthday: string,
    role: string,
    idSubscription?: number
}

export async function GetAllUsuarios(){
    try{
        const response: AxiosResponse = await api.get("/usuarios");

        console.log(response.data);
    } catch(error){
        console.log(error);
    }
}

export async function GetUsuarioByEmail(email:string){
    try{
        const response: AxiosResponse = await api.get(`/usuarios/findByEmail/${email}`);
        
        return response.data;
    }
    catch(error){
        return error;
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
        console.log(error);
    }
}