import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { api } from "../apiBaseURL";
import { GetCurrentUsuario } from "./UsuariosController";

export type profileDTOType = {
    image: string,
    name: string,
    type: string,
    idUser: number
}

export type profileResponseType = {
    id: number,
    image: string,
    name: string,
    type: string,
    idUser: number
}

export async function PostProfile(imageParam: string, nameParam: string, typeParam: boolean){
    try{
        let typeString = typeParam  == true ? "infantil" : "adulto";

        const user = await GetCurrentUsuario();

        const config: AxiosRequestConfig = {
            headers: {
            'Accept': 'application/json',
            } as RawAxiosRequestHeaders,
        }

        if(user != null){
            const profile: profileDTOType = {
                image: imageParam,
                name: nameParam,
                type: typeString,
                idUser: user.id
            }

            await api.post("/profiles", profile, config);
        }
    } catch(error){
        throw error;
    }
}

export async function GetProfileById(id: number){
    try{
        const response = await api.get(`/profiles/${id}`);

        return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function EditProfile(id: number, profile: profileDTOType){
    try{
        if(id !== null && profile !== undefined){
            await api.put(`/profiles/${id}`, profile);
        }
    }
    catch(error){
        throw error;
    }
}