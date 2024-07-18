import { useEffect, useState } from "react";
import "./index.css";
import { GetCurrentUsuario } from "../../controllers/UsuariosController";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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
            {profiles.map((profile) => (
                <div className="div-img">
                    <div className="img-container" onClick={() => navigate("/")}>
                        <img src={profile.image} alt="" />
                    </div>
                    <div className="name-container">
                        <p>{profile.name}</p>
                    </div>
                </div>
            ))}
            <div className="div-img">
                <div className="button-add">
                    <FaPlus />
                </div>
                <div className="name-container">
                    <p>Adicionar</p>
                </div>
            </div>
            
        </div>
    );
}