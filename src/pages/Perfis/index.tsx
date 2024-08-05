import { useEffect, useState } from "react";
import "./index.css";
import { GetCurrentUsuario } from "../../controllers/UsuariosController";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfilesSection } from "../../components/ProfilesSection";

const imageLogo = require("../../images/mandaloriano.png");

type ProfileType = {
    name: string,
    type: string,
    image: string,
    idUsuario: number
}

export function Perfis(){

    const navigate = useNavigate();

    return(
        <div className="container-perfis">
            <div className="title-perfis">
                <h1>Trocar Perfil</h1>
            </div>
            <div className="perfil-cards-section">
                <ProfilesSection route="/" type="default"/>
            </div>
            
            
        </div>
    );
}