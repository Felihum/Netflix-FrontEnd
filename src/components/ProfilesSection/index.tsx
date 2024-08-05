import { useEffect, useState } from "react";
import { ProfileCard } from "../ProfileCard";
import { GetCurrentUsuario } from "../../controllers/UsuariosController";
import "./index.css";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ProfileType = {
    id: number,
    name: string,
    type: string,
    image: string,
    idUsuario: number
}

type ProfilesSectionProps = {
    route: string,
    type: string
}

export function ProfilesSection(props: ProfilesSectionProps){
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

    if(props.type === "edit"){
        return (
            <div className="profilesSectionContainer">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.id} id={profile.id} image={profile.image} name={profile.name} route={props.route} type="edit"/>
                ))}
            </div>
        );
    }
    else{
        return (
            <div className="profilesSectionContainer">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.id} id={profile.id} image={profile.image} name={profile.name} route={props.route} type="default"/>
                ))}
                <div className="div-img">
                    <div className="button-container-add" onClick={() => navigate("/add-profile")}>
                        <FaPlus />
                    </div>
                    <div className="name-container">
                        <p>Adicionar</p>
                    </div>
                </div>
            </div>
        );
    }
    
}