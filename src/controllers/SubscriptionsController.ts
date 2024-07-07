import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { api } from "../apiBaseURL";

export type subscriptionDTOType = {
    name: string,
    value: number,
    period: string
}

export type subscriptionResponseType = {
    id: number,
    name: string,
    value: number,
    period: string
}

export async function GetAllSubscriptions(){
    try{
        const response: AxiosResponse<subscriptionResponseType[]> = await api.get("/subscriptions");
        const data: subscriptionResponseType[] = response.data;
        
        return data;
    } catch(error){
        throw error;
    }
}