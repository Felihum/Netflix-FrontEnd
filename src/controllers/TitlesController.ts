import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { api } from "../apiBaseURL";

type titleDTOType = {

}

export type titleResponseType = {
    id: number,
    title: string,
    releaseYear: number,
    duration: number,
    gender: string,
    image: string,
    logo?: string,
    description?: string,
    type: string,
    ageRating: number,
    seasons?: any
}

export async function GetAllTitles(){
    try{
        const response: AxiosResponse = await api.get("/titles");

        return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function GetAllMovies(){
    try{
        const data: titleResponseType[] = await GetAllTitles();

        let filteredTitle = data.filter((title) => {
            if(title.type === "filme"){
                return true;
            }
            else{
                return false;
            }
        });

        return filteredTitle;

    } catch(error){
        throw error;
    }
}

export async function GetAllSeries(){
    try{
        const data: titleResponseType[] = await GetAllTitles();

        let filteredTitle = data.filter((title) => {
            if(title.type === "serie"){
                return true;
            }
            else{
                return false;
            }
        });

        return filteredTitle;
        
    } catch(error){
        throw error;
    }
}