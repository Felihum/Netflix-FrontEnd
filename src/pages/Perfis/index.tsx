import { useEffect, useState } from "react";
import "./index.css";
import { GetCurrentUsuario } from "../../controllers/UsuariosController";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "../../components/ProfileCard";

const imageLogo = require("../../images/mandaloriano.png");

type ProfileType = {
    name: string,
    type: string,
    image: string,
    idUsuario: number
}

export function Perfis(){

    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const navigate = useNavigate();

    async function fetchData(){
        try{
            const user = await GetCurrentUsuario();
            setProfiles(user.profiles)
        } catch(error){
            throw error;
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="container-perfis">
            <div className="title-perfis">
                <h1>Trocar Perfil</h1>
            </div>
            <div className="perfil-cards-section">
                {profiles.map((profile) => (
                    <ProfileCard image={profile.image} name={profile.name} />
                ))}
                <div className="div-img">
                    <div className="button-add" onClick={() => navigate("/add-profile")}>
                        <FaPlus />
                    </div>
                    <div className="name-container">
                        <p>Adicionar</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}