import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { api } from "../apiBaseURL";
import { GetCurrentUsuario } from "./UsuariosController";

type profileType = {
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
            const profile: profileType = {
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